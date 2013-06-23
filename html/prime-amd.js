define(function(require, exports, module) {
	var primeAmd = getPrimes;

	return primeAmd;
});


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
