@extends('admin.admin_base')
@section('links')
<link rel="stylesheet" type="text/css" href="{{ asset('css/inductions_admin_view.css') }}">
@endsection
@section('scripts')
<script type="text/javascript"">	
$('.collapsible').collapsible({
    accordion : false
});
function downloadExcel () {

}
</script>
@endsection


@section('main')
<div class="container">
    <h3 id="main-header">Inductions</h3>
    <div id="profile-dropdown">
	  	<a class='dropdown-button btn' href='#' data-activates='dropdown1'>View by Profile : {{$profile }}</a>
	  	<ul id='dropdown1' class='dropdown-content'>
		    <li><a href="/admin/inductions/all" >All</a></li>
		    <li><a href="/admin/inductions/oc" class ="selected" >OC</a></li>
		    <li><a href="/admin/inductions/content" >Content</a></li>
		    <li><a href="/admin/inductions/design" >Design</a></li>
	  	</ul>   	
    </div>
    	<a href="/admin/inductions/getexcel">Download excel</a>

    {{-- <a class="waves-effect waves-light btn" onclick="downloadExcel()">Download Excel</a> --}}
    <div class="valgn-wrapper" >
        <ul class="collapsible popout" data-collapsible="accordion">
			@foreach(json_decode($responders) as $responder)
		    	<li>
		      	<div class="collapsible-header">
		        	<p class="roll_no_p"><em>{{ $responder -> roll_no }}</em><p>
		      	</div>
		      	<div class="collapsible-body row">
		        	<div class="col s12" id="body_div">
		        		@if($profile == 'all' || $profile == 'oc')
			        		<h4 class="profile">Profile : OC</h4>

							@foreach($responder->responses as $response)
								@if($response->profile == 'oc')
								<p class= "response_p">
									<strong>{{ $response->question_text }} : </strong>{{ $response->response }}
								</p>
								@endif
							@endforeach
						@endif
		        		@if($profile == 'all' || $profile == 'content')
			        		<h4 class="profile">Profile : Content</h4>
							@foreach($responder->responses as $response)
								@if($response->profile == 'content')
								<p class= "response_p">
									<strong>{{ $response->question_text }} : </strong>{{ $response->response }}
								</p>
								@endif
							@endforeach	
						@endif						
						@if($profile == 'all' || $profile == 'design')
			        		<h4 class="profile">Profile : Design</h4>

							@foreach($responder->responses as $response)
								@if($response->profile == 'design')
								<p class= "response_p">
									<strong>{{ $response->question_text }} : </strong>{{ $response->response }}
								</p>
								@endif
							@endforeach
						@endif
					</div>
		      	</div>
		    	</li>
			@endforeach
		</ul>
    </div>
</div>
@endsection