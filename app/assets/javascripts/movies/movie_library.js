(function(targetNamespace){
	function MovieLibrary(a_Movies) {
		this.movies = a_Movies;
	}

	var proto = MovieLibrary.prototype;

	// return all pixar movies
	proto.allPixarMovies = function() {
		var return_array = [];
		for(var i = 0; i<this.movies;i++) {
			curr = this.movies[i];

			if (curr.studio === STUDIOS.PIXAR) {
				return_array.push(curr);
			}
		}
		return return_array;
	}

})(this);

