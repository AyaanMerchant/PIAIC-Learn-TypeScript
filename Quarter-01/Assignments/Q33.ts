// Declare an array of numbers named ordinalNumber and assign it the values 1 through 9
let ordinalNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Start a for loop to iterate over each element in the ordinalNumber array
for (let a = 0; a < ordinalNumber.length; a++) {
    // Check if the current element is 1
    if (ordinalNumber[a] === 1) {
        // If the current element is 1, print the number followed by "ST"
        console.log(`${ordinalNumber[a]}ST`);
    }
    // Check if the current element is 2
    else if (ordinalNumber[a] === 2) {
        // If the current element is 2, print the number followed by "ND"
        console.log(`${ordinalNumber[a]}ND`);
    }
    // Check if the current element is 3
    else if (ordinalNumber[a] === 3) {
        // If the current element is 3, print the number followed by "RD"
        console.log(`${ordinalNumber[a]}RD`);
    }
    // For all other cases
    else {
        // Print the number followed by "TH"
        console.log(`${ordinalNumber[a]}TH`);
    }
}
