@extends('base')

@section('links')
    <link rel="stylesheet" type="text/css" href="{{asset('css/induction_main.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/font-awesome.min.css')}}">
@endsection

@section('scripts')
    <script type="text/javascript" src="{{asset('js/induction_main.js')}}"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
@endsection
@section('main')


<div class="inductions-container text-center">

	<div class="">
		<h1 class="">INDUCTIONS</h1>
		<h2 class="text-center">OC</h2>
		@if($oc_filled)
		<button class="btn btn-success btn-lg"> <i class="fa fa-check"></i> Already filled</button>
		@else 
		<a href="/inductions/form/oc" class="btn btn-primary btn-lg">Apply now !</a>
		@endif
		<hr class="my-2">
		<h2 class="text-center">Content</h2>
		@if($content_filled)
		<button class="btn btn-success btn-lg"> <i class="fa fa-check"></i> Already filled</button>
		@else 
		<a href="/inductions/form/content" class="btn btn-primary btn-lg">Apply now !</a>
		@endif
		<hr class="my-2">
		<h2 class="text-center">Design</h2>
		@if($design_filled)
		<button class="btn btn-success btn-lg"> <i class="fa fa-check"></i> Already filled</button>
		@else 
		<a href="/inductions/form/design" class="btn btn-primary btn-lg">Apply now !</a>
		@endif
		<hr class="my-2">
	</div>
	<div class="logout-div">
	<a href="/logout" class="btn btn-danger">LOGOUT</a>
	</div>	
</div>

@endsection
