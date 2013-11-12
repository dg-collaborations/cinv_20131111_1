(function(targetNamespace){
	function MovieLibrary(a_Movies) {
		this.movies = a_Movies;
	}

	var proto = MovieLibrary.prototype;

	// return all movies from studio
	proto.allMoviesByStudio = function(studio_const) {
		var return_array = [];
		for(var i = 0; i<this.movies;i++) {
			curr = this.movies[i];

			if (curr.studio === studio_const) {
				return_array.push(curr);
			}
		}
		return return_array;
	}

	// return all movies not from studio
	proto.allMoviesNotByStudio = function(studio_const) {
		var return_array = [];
		for(var i = 0; i<this.movies;i++) {
			curr = this.movies[i];

			if (curr.studio !== studio_const) {
				return_array.push(curr);
			}
		}
		return return_array;
	}	

	proto.allPixarMovies = function() {
		return this.allMoviesByStudio(STUDIOS.PIXAR);
	}

	proto.allPixarOrDisneyMovies = function() {
		pixar = this.allMoviesByStudio(STUDIOS.PIXAR);
		disney = this.allMoviesByStudio(STUDIOS.DISNEY);

		return pixar.concat(disney);
	}

	proto.allMoviesNotPublishedByPixar = function() {
		return this.allMoviesNotByStudio(STUDIOS.PIXAR);
	}

	targetNamespace.MovieLibrary = MovieLibrary;
})(this);