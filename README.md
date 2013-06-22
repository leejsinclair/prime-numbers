prime-numbers
=============

A simple module for calculating prime number beneath a specified number.

## API

``` js
var prime = require("./prime.js");
var primeNumbers = prime( 100 );

primeNumbers.forEach(
  function( num )
		{
			console.log( num );
		}
);
```

