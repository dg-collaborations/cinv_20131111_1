(function(targetNamespace){
	function MovieLibrary(a_Movies) {
		this.movies = a_Movies;
	}

	var proto = MovieLibrary.prototype;

	// return all pixar movies
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

	proto.allPixarMovies = function() {
		return allMoviesByStudio(STUDIOS.PIXAR);
	}

	proto.allPixarOrDisneyMovies = function() {
		// TOD
	}

	proto.allMoviesNotPublishedByPixar = function() {

	}

})(this);