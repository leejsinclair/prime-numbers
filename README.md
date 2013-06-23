prime-numbers
=============

A simple module for calculating prime numbers beneath a specified number.

## Node API

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

## HTML API
``` html
<script src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.5/require.js"></script>
<script language="javascript" defer="true">
	require.config({
		baseUrl: '/',
		enforceDefine: true
	});

	require(['prime-amd'], function(prime)
		{
			var numbers = prime(100);
			console.log( numbers );

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
