var fs = require("fs");
var prime = require("../html/prime-both.js");
var primeNumbers = prime.list( 100 );

primeNumbers.forEach(
	function( num )
		{
			console.log( num );
		}
);
