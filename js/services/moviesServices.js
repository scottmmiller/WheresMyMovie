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
			var movieData = data.data.movies;  //Array
				
			var onDvdArray = [];
			var inTheaterArray = [];
			var comingSoonArray = [];
			var noReleaseDate = [];
			var today = moment();
			for(var i = 0; i < movieData.length; i++) {
				var releaseDate = movieData[i].release_dates;
				if(!releaseDate.dvd && !releaseDate.theater) {
					noReleaseDate.push(movieData[i]);
				} else if(releaseDate.dvd) {
					onDvdArray.push(movieData[i]);
				} else {
					if(moment(releaseDate.theater) >  today) {
						comingSoonArray.push(movieData[i]);
					} else {
						inTheaterArray.push(movieData[i]);
					}
				}
			}

			var moviesObject = {
				onDvd: onDvdArray,
				inTheater: inTheaterArray,
				comingSoon: comingSoonArray,
				noReleaseDate: noReleaseDate
			};
				console.log(movieData)
				console.log(moviesObject)
			deferred.resolve(moviesObject);
		}, function(error) {
			deferred.reject(error)
		});


		return deferred.promise;
	}
});




