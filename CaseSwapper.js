function swapCase(str){
    // Initialize an empty string to store the swapped case characters
    let swappedStr = '';
    // Iterate through each character of the input string
    for (let i = 0; i < str.length; i++){
        const char = str[i];
        if (char === char.toUpperCase()){
            swappedStr += char.toLowerCase();
 }else {
            swappedStr += char.toUpperCase();
        }
        // Return the final swapped string
    } return swappedStr;
}
// Example Usage:
const input = 'The Quick Brown Fox';
const output = swapCase(input);
console.log(output); //output: 'tHE qUICK bROWN fOX'