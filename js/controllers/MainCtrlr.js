var app = angular.module('skootsMovies');

app.controller('MainCtrlr', function($scope, moviesService) {

	$scope.test = "MainCtrlr";

	$scope.newMovie = function() {
		moviesService.getInfo($scope.searchTerm).then(function(response) {
			$scope.movies = response;
		});
		$scope.searchTerm = '';

	}

	$scope.dvdFilter = function(item) {
		return !!item.release_dates.dvd;
	}
	
	$scope.theaterFilter = function(item) {
		return !item.release_dates.dvd;
	}


});