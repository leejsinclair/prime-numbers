prime-numbers
=============

A simple module for calculating prime numbers beneath a specified number.

## CommonJS - synchronous

### Node

``` js
var prime = require("./prime-commonJS");
var primeNumbers = prime.list( 100 );

console.log( primeNumbers );
```

### Browser

``` html
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="./prime-commonJS.js"></script>
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

Results:

```
2
3
5
7
11
... etc.
```
