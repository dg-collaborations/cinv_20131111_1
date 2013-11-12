(function(targetNamespace){
	function MovieLibrary(a_Movies) {
		this.movies = a_Movies;
	}

	var proto = MovieLibrary.prototype;


	proto.allPixarMovies = function() {
		return this.movies.filter(function(){
      this.studio === STUDIOS.PIXAR;
    });
	}

	proto.allPixarOrDisneyMovies = function() {
		return this.movies.filter(function(){
      this.studio === STUDIOS.PIXAR || this.studio === STUDIOS.DISNEY;
    })
	}

	proto.allMoviesNotPublishedByPixar = function() {
		return this.allMoviesNotByStudio(STUDIOS.PIXAR);
	}

	targetNamespace.MovieLibrary = MovieLibrary;
})(this);
