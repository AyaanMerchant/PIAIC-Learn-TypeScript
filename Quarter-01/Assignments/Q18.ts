let country: string[] = ["Canada", "USA", "Australia", "England", "Germany", "New Zealand", "Holland", "Singapore"];
// Declare and initialize an array called 'country' of type 'string[]' with names of countries.

console.log("Country List:", country);
// Log the original 'country' array to the console.

let alphaCountry = [...country].sort();
// Create a copy of the 'country' array using the spread operator and sort it in alphabetical order. Store the sorted array in 'alphaCountry'.

console.log("Alphabetical Order:", alphaCountry);
// Log the 'alphaCountry' array (sorted in alphabetical order) to the console.

console.log("Original List:", country);
// Log the original 'country' array to the console to show that it remains unchanged.

let reverseCountry = [...country].reverse();
// Create a copy of the 'country' array using the spread operator and reverse its order. Store the reversed array in 'reverseCountry'.

console.log("Reverse Order:", reverseCountry);
// Log the 'reverseCountry' array (reversed order) to the console.

console.log("Original List:", country);
// Log the original 'country' array to the console to show that it remains unchanged.
