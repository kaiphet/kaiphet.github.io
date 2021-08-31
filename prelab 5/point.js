function showPrimes(n) {

    for(let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        alert(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
document.write("Write the web app to prompt accepting for a positive integer number If the entered text is not a positive integer number, then the web app will keep asking for a number until the valid positive integer is entered If the entered text is a positive integer, then the app will print prime numbers that are not greater than that given positive integer"
        )

        function prime_factors(num) {
            function is_prime(num) {
              for (var i = 2; i <= Math.sqrt(num); i++)
              {
                if (num % i === 0) return false;
              }
              return true;
            }
            var result = [];
            for (var i = 2; i <= num; i++)
            {
              while (is_prime(i) && num % i === 0) 
              {
                if (result.indexOf(i) == -1) result.push(i);
                num /= i;
              }
            }
            return result;
          }
          console.log(prime_factors(100));
          console.log(prime_factors(101));
          console.log(prime_factors(103));
          console.log(prime_factors(104));
          console.log(prime_factors(105));
          