# SA-02-WK2
Date, 2024/03/31
By, Gitau Agnes Njeri
## Instructions
1. Fork and clone this repo to your local environment
2. Follow the prompts for each input as suggested on the README file
3. Use 'node(name).js' to run each file
### Case Swapper
## Description
The case swapper is a javascript function that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output will be 'tHE qUICK bROWN fOX'.
## Instructions
To use the Case Swapper function, follow these steps:
1. Include the `swapCase` function in your javascript project.
2. Call the `swapCase` function and pass the string you want to swap the case for as the argument.
3. The function will return the modified string with swapped cases.
# Parameters
. `str`(String):The input string for which the case of each character needs to be swapped.
# Return Value
. (String):The modified string with swapped cases.

### Array Generator
## Description
The Array Generator is a javascript function that accepts two numbers and generates an array containing numbers between them, inclusive of both numbers. For example, if the two numbers are 4 and 7, the output array will be `[4,5,6,7]`. Similarly, if the numbers are -4 and 7, the output array will be `[-4,-3,-2,-1,0,1,2,3,4,5,6,7]`
## Instructions
To use the Array Generator function, follow these steps:
1. Include the `generateArray` function in your JavaScript project.
2. Call the `generateArray` function and pass the two numbers representing the range as arguments.
3. The function will return an array containing numbers between the specified range.
# Parameters
. `start` (Number): The starting number of the range.
. `end`(Number): The ending number of the range.
# Return Value
. (Array): An array containing numbers between the specified range, inclusive of both `start` and `end`.

### Prime Number Filter
The Prime Number Filter is a JavaScript function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. This function efficiently identifies prime numbers and ensures that they are returned in the same order they appear in the input array.
## Instructions
To use the Prime Number Filter function, follow these steps:
1. Include the `isPrime` and `filterPrimes` functions in your javascript project.
2. Call the `filterPrimes` function and pass the array of numbers you want to filter as the argument.
3. The function will return a new array containing only the prime numbers from the original array.
## Function Definitions
`isPrime(num)`
. Determines whether a given number is prime.
. Parameters:
 .`num`(Number): The number to check for primality.
. Returns:
 .(Boolean): `true` if number is prime, `false` otherwise.
`filterPrimes(arr)`
. Filters out prime numbers from an array while maintaining their original order.
. Parameters:
 .`arr`(Array): The array of numbers to filter.
 .Returns:
  .(Array): A new array containing only the prime numbers from the original array.

