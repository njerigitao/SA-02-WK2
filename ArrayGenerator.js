function generateArray(start, end){
    //Initialize an empty array to store the generated numbers
    const result = [];
    // Determine the direction of the range
    const step = start <= end ? 1: -1;
    // Loop through the range from start to end inclusive
    for (let i = start; start <= end ? i <= end : i>= end; i+=step){
        // Push each number to the result array
        result.push(i);
    }
    // Return the generated array
    return result;
}
// Example usage:
const arr1 = generateArray(4, 7);
console.log(arr1); // Output:[4,5,6,7]

const arr2 = generateArray(-4, 7);
console.log(arr2); // Output:[-4,-3,-2,-1,0,1,2,3,4,5,6,7]