<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use Log;
use DB;
use Session;
use Redirect;
use Validator;
use Excel;
use stdClass;
use Exception;
use Sangria\JSONResponse;
use App\Models\Questions;
use App\Models\Answers;
use App\Http\Controllers\Controller;
use App\Exports\inductionsExport;
class InductionsController extends Controller
{
    public function inductionsPage(){
        $roll_no = Session::get('roll_no');
        if (Session::get('roll_no')) {
            return view('inductions.main',[
                'oc_filled'      => $this->checkIfFilled()->oc,                    
                'content_filled' => $this->checkIfFilled()->content,           
                'design_filled'  => $this->checkIfFilled()->design
            ]);
            
        } else {
            return Redirect::to('/login');
        }
    }

// Function to check if the student as already filled the form
    protected function checkIfFilled(){
        $roll_no = Session::get('roll_no');
        try {
            $responses = Answers::where('roll_no', $roll_no)
                                -> join('questions', 'questions.question_id', '=', 'answers.question_id')
                                -> select('questions.profile')
                                -> get();
            $filled = new stdClass();
            $filled->oc = $filled->content = $filled->design = false;
            foreach ($responses as $key => $response) {
                if ($response->profile == 'oc') {
                    $filled->oc = true;
                }else if ($response->profile == 'content'){
                    $filled->content = true;
                }else if($response->profile == 'design'){
                    $filled->design = true;
                }
            }
            return $filled;
        } catch (Exception $e){
            return JSONResponse::response(500, $e->getMessage());
        }
    }

    public function displayForm($profile){
        $roll_no = Session::get('roll_no');

        if (Session::get('roll_no')) {
            if($this->checkIfFilled()->$profile){
                return "You filled this already, nibba. If you came aaalll this way, pls contact Aaveg WebOps Head for inductions : 9791058966";
            }
            $questions = Questions::where('profile', $profile)
                                  -> get();
            return view('inductions.form',[
                'profile'   => $profile,
                'questions' => $questions,
            ]);            
        } else {
            return Redirect::to('/login');
        }
    }

    public function adminView($profile) {
        if($profile != 'oc' && $profile != 'content' && $profile != 'design' && $profile != 'all'){
            return "wrong URL";
        }
        $responses = Answers::join('questions', 'questions.question_id', '=', 'answers.question_id') 
                            -> select('answers.roll_no', 'questions.profile', 'questions.question_text', 'answers.response')
                            -> orderBy('answers.roll_no')
                            -> get();
        
        //Cool trick to group by roll_no
        $i=-1;
        foreach ($responses as $key => $response) {
            if($response->profile == $profile || $profile == 'all'){
                if ($i < 0 ||$response->roll_no!=$responses[$key-1]->roll_no) {

                    
                    $responders[] = new stdClass();
                    $i=$i+1;
                    $responders[$i]->roll_no = $response->roll_no;
                    $responders[$i]->responses[] = $response;                      
                }else{
                    $responders[$i]->responses[] = $response;
                }      
            }
        }
        if(!isset($responders)){$responders = array();}
        //return $responders;
        return view('inductions.admin_view', [
            'responders' => json_encode($responders),
            'profile'    => $profile,
        ]);
    }

    public function submitForm(Request $request, $profile){   
        $roll_no = Session::get('roll_no');
        if ($roll_no) {

            if ($this->checkIfFilled()->$profile) {
                return Redirect::to('/inductions');
            }

            try {

                $question_count = Questions::where('profile', $profile)->count();
                $input = $request->all();
                $rules = [];

                foreach($input['responses'] as $key => $val){
                    $rules['responses.'.$key] = 'required';
                }
                $rules['responses'] = 'required|min:'.$question_count;
                $validator = Validator::make($input, $rules);

                if($validator->fails()) {
                    return ('loginFail');
                    $message = $validator->errors()->all();
                    Log::info($validator->errors()->all());
                    return JSONResponse::response(400, $message);
                }



                try{
                    DB::beginTransaction();
                    foreach ($input['responses'] as $key => $response) {
                $new_answer = new Answers();
                $new_answer->roll_no = $roll_no;
                        $new_answer->question_id = $key;
                        $new_answer->response = $response;
                        $new_answer->save();                                        
                    }

                    DB::commit();
                    return Redirect::to('/inductions');
                } catch (Exception $e) {
                    
                    DB::rollBack();
                    $response = $e->getMessage()." ".$e->getLine();
                    return JsonResponse::response("400", $response);                 
                }
                
            } catch (Exception $e){
                return JSONResponse::response(500, $e->getMessage());
            }
        } else {
            return Redirect::to('/login');          
        }        
    }

    public function getExcel(){

        Excel::create('Induction_responses', function($excel) {

            $excel->sheet('OC', function($sheet) {
                $sheet->cell('F1', function($cell) {
                    $cell->setValue('OC RESPONSES');
                });
                                
                $sheet->fromArray($this->getExcelData('oc')
                    ,null, 'A4',false, false);

            });

            $excel->sheet('CONTENT', function($sheet) {
                $sheet->cell('F1', function($cell) {
                    $cell->setValue('CONTENT RESPONSES');
                });
                                
                $sheet->fromArray($this->getExcelData('content')
                    ,null, 'A4',false, false);

            });

            $excel->sheet('DESIGN', function($sheet) {
                $sheet->cell('F1', function($cell) {
                    $cell->setValue('DESIGN RESPONSES');
                });
                                
                $sheet->fromArray($this->getExcelData('design')
                    ,null, 'A4',false, false);

            });



         })->export('xlsx');

    }

    public function getExcelData($profile)
    {
                $responses = Answers::join('questions', 'questions.question_id', '=', 'answers.question_id') 
                            -> select('answers.roll_no', 'questions.profile', 'questions.question_text', 'answers.response')
                            -> orderBy('answers.roll_no')
                            -> get();
        
        $i=0;
        foreach ($responses as $key => $response) {
            if($response->profile == $profile || $profile == 'all'){
                if ($i <=0 ||$response->roll_no!=$responses[$key-1]->roll_no) {

                    $result[] = array();
                    $result[$i][] = $response->roll_no;
                    $result[$i][] = $response->response;

                    $i=$i+1;                      
                }else{
                    $result[$i-1][] = $response->response;
                }      
            }
        }
        if(!isset($result)){
            $result = array();
        }

        $questions[0] = 'Roll No';

        $questionQuery = Questions::where('profile', $profile)->select('question_text')->get();

        foreach ($questionQuery as $key => $query) {
            $questions[]=$query['question_text'];            
        }

        array_unshift($result,$questions);
        return $result;
    }
}


