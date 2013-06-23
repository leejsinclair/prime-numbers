prime-numbers
=============

A simple module for calculating prime numbers beneath a specified number.

## CommonJS - synchronous

### Node

``` js
var prime = require("./prime-common-js.js");
var primeNumbers = prime.list( 100 );

console.log( primeNumbers );
```

### Browser

``` html
<script src="./prime-common-js.js"></script>
<script language="javascript" defer="true">
	var primeNumbers = prime.list(100);
	console.log( primeNumbers );
</script>
```

## AMD - asynchronous
``` html
<script src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.5/require.js"></script>
<script language="javascript" defer="true">
	require.config({
		baseUrl: '/',
		enforceDefine: true
	});

	require(['prime-amd'], function(prime)
		{
			var primeNumbers = prime(100);
			console.log( primeNumbers );

		}
	);
```

## Then I had an idea!

What if you could write a module that could work as a script tag, commonJS require or AMD require.  So I looked at the underscore project and created:

### Module: prime-both.js

It seems to work in everything, here is function:

``` js
/* CommonJS shin */
(function( exports ) {
		exports.list = getPrimes;
})(typeof exports === 'undefined'? this['prime']={}: exports);

/* AMD shin */
if(typeof define !== 'undefined') define(function(require, exports, module) {
		return getPrimes;
});

/* mongodb shin */
if(typeof db !== 'undefined' && typeof db.version !== 'undefined') {
	var _prime = getPrimes;
}

/* Get primes base function */
function getPrimes(upToNumber)
{
	var sieve = [], i, j, primes = [];
	for (i = 2; i <= upToNumber; ++i)
	{
		if (!sieve[i])
		{
			primes.push(i); // i has not been marked -- it is prime
			for (j = i << 1; j <= upToNumber; j += i)
			{
				sieve[j] = true;
			}
		}
	}
	return primes;
}
```

### Usage

#### CommonJS - synchronous

``` js
var prime = require("../html/prime-both.js");
var primeNumbers = prime.list( 100 );

console.log( primeNumbers );
```

#### Browser

``` html
<script src="./prime-both.js"></script>
<script language="javascript" defer="true">
	var primeNumbers = prime.list(100);
	console.log( primeNumbers );
</script>
```

#### AMD - asynchronous

``` html
<script src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.5/require.js"></script>
<script language="javascript" defer="true">
	require.config({
		baseUrl: '/',
		enforceDefine: true
	});

	require(['prime-both'], function(prime)
		{
			var primeNumbers = prime(100);
			console.log( primeNumbers );

		}
	);
```

#### load() : MongoDB

``` js
load("./html/prime-both.js");
_prime(100);
```
