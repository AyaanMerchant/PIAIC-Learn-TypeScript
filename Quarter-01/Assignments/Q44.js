// Define a function named makeSandwich that takes a variable number of string arguments using the rest parameter syntax
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // Print a message indicating the start of sandwich making
    console.log("Making The Sandwich from the following Items");
    // Start a for...of loop to iterate over each item in the items array
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        // Print each item prefixed with a dash
        console.log("- ".concat(item));
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
