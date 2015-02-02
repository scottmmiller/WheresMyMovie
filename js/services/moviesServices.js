var app = angular.module('skootsMovies');

app.service('moviesService', function($http, $q, $location) {
	var rottenTomAPI = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=dewea2dj5uhnnq45qu9rjwb5&_prettyprint=true&q=';

	this.getInfo = function(searchTerm) {
		console.log(searchTerm)
		var deferred = $q.defer();
		$http({
			method: "JSONP",
			url: rottenTomAPI + searchTerm,
			params: {
				callback: 'JSON_CALLBACK'
			}
		}).then(function(data) {
			var movieData = data.data.movies;
			console.log(movieData);
			deferred.resolve(movieData);
		}, function(error) {
			deferred.reject(error)
		});
		return deferred.promise;
	}
});