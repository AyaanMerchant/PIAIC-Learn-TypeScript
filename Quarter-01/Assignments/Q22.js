var number = [5, 9, 3, 4, 7];
// Declare and initialize an array called 'number' of type 'number[]' with some numeric values.
try {
    var outOfBoundNumber = number[5];
    // Attempt to access the element at index 5 of the 'number' array, which is out of bounds since the array has only 5 elements (indices 0 to 4).
    console.log(outOfBoundNumber);
    // Log the value of 'outOfBoundNumber' to the console. This will log 'undefined' because index 5 does not exist in the array.
}
catch (error) {
    console.log("caught the error index out of bound", error);
    // If an error occurs in the try block, catch the error and log a message to the console along with the error object.
}
// Error will come "Undefined"
