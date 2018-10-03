@extends('base')

@section('links')
    <link rel="stylesheet" type="text/css" href="{{asset('css/inductions_form.css')}}">
@endsection

@section('scripts')
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
@endsection
@section('main')

<div class="container" id="main-container">
    <br><br><br>
    <div class="jumbotron">
        <h1 class="display-3 text-center" >Inductions - {{ strtoupper($profile) }}</h1>
        <hr class="my-2">
    <form id="inductions_form" action="/inductions/form/{{ $profile }}" method="POST">
        @foreach($questions as $question)
                <div class="form-group">
                <label for="{{ $question->question_id }}">{{ $question->question_text }}</label>
                @if($question->rows > 1)
                    <textarea class="form-control" id="{{ $question->question_id }}" name="responses[{{ $question->question_id }}]" placeholder="{{ $question->question_text }}" required rows="{{ $question->rows }}"></textarea>
                @else
                    <input type="text" class="form-control" id="{{ $question->question_id }}" name="responses[{{ $question->question_id }}]" placeholder="{{ $question->question_text }}" required>
                @endif                
            </div>   
        @endforeach
        <button class="btn btn-primary" type="submit">SUBMIT!</button>
    </form>
  </div>
</div>
@endsection
