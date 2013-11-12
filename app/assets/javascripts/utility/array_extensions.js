(function(targetNamespace){
  Array.prototype.forEach = function(func){
  	for(var i = 0; i<this.length; i++) {
  		func.call(this[i]);
  	}
  };

  Array.prototype.filter = function(matcher) {
  		var self = this;
  		var return_array = [];

		this.forEach(
			function() {
				if (matcher.call(this)) {
					return_array.push(this);
				}
			}
		);

		return_array;
  }
})(this)
