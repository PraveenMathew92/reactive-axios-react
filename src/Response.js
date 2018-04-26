var axios = require("axios");
var Rx = require('rxjs/Rx');
var APIKEY = require("APIKEY");



var call = function() {
	return Rx.Observable.fromPromise(
		axios.get('http://api.timezonedb.com/v2/get-time-zone?key={APIKEY.KEY}&format=json&by=zone&zone=Asia/Kolkata')
			.then(function(response){
				//console.log(response.data);
				return response.data["formatted"];
		})
	);
}

var stream = call()

export default stream;