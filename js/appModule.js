var app = angular.module('skootsMovies', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/mainTemp.html',
		controller: 'MainCtrlr'
	}).when('/theater', {
		templateUrl: 'templates/theaterTemp.html',
		controller: 'TheaterCtrlr',
		resolve: {

		}
	}).when('/disc', {
		templateUrl: 'templates/discTemp.html',
		controller: 'DiscCtrlr',
		resolve: {

		}
	}).otherwise( {
		redirectTo: '/'
	})


});