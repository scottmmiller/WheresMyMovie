var app = angular.module('skootsMovies');

app.controller('DiscCtrlr', function($scope, moviesService) {

	$scope.test = "DiscCtrlr";

	this.dvdInfo = function() {

		moviesService.getInfo($scope.title).then(function(response) {
		console.log(response)

		var dvdInfo = response.onDvd;
		$scope.image = dvdInfo.posters.profile;
		$scope.theater = response.inTheater;
		$scope.coming = response.comingSoon;
		$scope.noRelease = response.noReleaseDate;

		});
		$scope.searchTerm = '';

});