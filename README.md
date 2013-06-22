prime-numbers
=============

A simple module for calculating prime numbers beneath a specified number.

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
Results:

```
2
3
5
7
11
... etc.
```
