// Define a function named makeSandwich that takes a variable number of string arguments using the rest parameter syntax
function makeSandwich(...items: string[]) {
    // Print a message indicating the start of sandwich making
    console.log("Making The Sandwich from the following Items");
    // Start a for...of loop to iterate over each item in the items array
    for (let item of items) {
        // Print each item prefixed with a dash
        console.log(`- ${item}`);
    }
    // Print a message indicating the sandwich is ready
    console.log("Your Sandwich Is Ready!\n");
}

// Call the makeSandwich function with the ingredients "chicken", "Tomato", and "cheese"
makeSandwich("chicken", "Tomato", "cheese");

// Call the makeSandwich function with the ingredients "jelly" and "Peanut Butter"
makeSandwich("jelly", "Peanut Butter");

// Call the makeSandwich function with the ingredients "kabab", "Ketchup", "Garlic", and "Mayonise"
makeSandwich("kabab", "Ketchup", "Garlic", "Mayonise");
