(function(targetNamespace){

  Array.prototype.forEach = function(func){
  	for(var i = 0; i <this.length; i++) {
  		func.call(this[i]);
  	}
  };

  Array.prototype.filter = function(matcher) {
    var results = [];

		this.forEach(function(){
				if (matcher.call(this)) {
					results.push(this);
				} 
      });

		return results;
  }
})(this)
