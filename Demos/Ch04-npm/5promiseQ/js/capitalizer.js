const capitalizer = function() {

	this.capitalize = function(value) {
		const upper = value.split(' ').map(function(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		});
        return upper.join(' ');
	}

	return this;

}();

