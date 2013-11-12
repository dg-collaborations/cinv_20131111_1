(function(targetNamespace){

  Array.prototype.forEach = function(func){
  	for(var i = 0; i <this.length; i++) {
  		func.call(this[i]);
  	}
  };

  Array.prototype.filter = function(matcher) {
    var results = [];

		this.forEach(function(){
      var target = this;
			 matcher.call(target) && results.push(target);
      });

		return results;
  }

  function match(){
  }

})(this)
