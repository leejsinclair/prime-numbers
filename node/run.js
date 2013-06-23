var fs = require("fs");
var prime = require("../prime.js");
var primeNumbers = prime( 100 );

primeNumbers.forEach(
	function( num )
		{
			console.log( num );
		}
);
