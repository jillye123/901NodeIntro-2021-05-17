const ajaxService = function() {

	this.getJSON = function(url) {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.setRequestHeader("Accept", "application/json");
		
		const deferred = Q.defer();
		
		xhr.onload = function (e) {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					const data = (xhr.responseText) ? JSON.parse(xhr.responseText) : null;
					deferred.resolve(data);
				} else {
					deferred.reject(xhr);
				}
			}
		};
		
		xhr.onerror = function (e) {
			console.error(xhr.statusText);
		};
		
		xhr.send();
		return deferred.promise;
	};

	return this;

}();

