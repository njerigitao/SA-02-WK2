function isPrime(num) {
    // 1 and numbers less than 1 are not prime
    if (num <= 1) return false;
    // check for divisibility from 2 to the square root of the number
    for (let i = 2; i<= Math.sqrt(num); i++){
        if (num % i === 0){
            // If the number is divisible by any other number, it's not prime
            return false;
        }
    }
    // If the loop completes without finding a divisor, the number is prime 
    return true;
}
function filterprimes(arr){
    // Use the filter method to keep only prime numbers
    return arr.filter(num => isPrime(num));
    }
    // Example usage:
    const input = [1,2,3,4,5,6,7,8,9,10];
    const primes = filterprimes(input);
    console.log(primes); // Output: [2,3,5,7]