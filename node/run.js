var fs = require("fs");
var prime = require("./prime-commonJS.js");
var primeNumbers = prime.list( 100 );

primeNumbers.forEach(
	function( num )
		{
			console.log( num );
		}
);
