/* Common JS shin for node.js and the browser */
(function( exports ) {
		exports.list = getPrimes;
})(typeof exports === 'undefined'? this['prime']={}: exports);

if(typeof define !== 'undefined') define(function(require, exports, module) {
		return getPrimes;
});

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