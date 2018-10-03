@extends('base')

@section('links')
    <link rel="stylesheet" type="text/css" href="{{asset('css/login.css')}}">
@endsection

@section('scripts')
    <script type="text/javascript" src="{{asset('js/login.js')}}"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
@endsection
@section('main')

<div class="login-container center-align">
    <h1 class="center-align">Please check your credentials </h1>
    <h2 class="center-align">Also,you must be a UG first year student to login :(</h2>
    <hr>
    <a href="/login" class="btn btn-primary btn-lg">Try Again</a>
</div>

@endsection
