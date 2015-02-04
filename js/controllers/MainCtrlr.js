var app = angular.module('skootsMovies');

app.controller('MainCtrlr', function($scope, moviesService) {

	$scope.test = "MainCtrlr";

	$scope.newMovie = function() {
		moviesService.getInfo($scope.searchTerm).then(function(response) {
			$scope.dvds = response.onDvd;
			$scope.theater = response.inTheater;
			$scope.coming = response.comingSoon;

		});
		$scope.searchTerm = '';

	}


});