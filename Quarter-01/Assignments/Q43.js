// Declare an array of strings named magicainName3 and assign it various magician names
var magicainName3 = ["Ayaan", "Areesh", "Ali", "Husain"];
// Define a function named show_magicians3 that takes one parameter: magicainName3 (an array of strings)
function show_magicians3(magicainName3) {
    // Start a for...of loop to iterate over each element in the magicainName3 array
    for (var _i = 0, magicainName3_1 = magicainName3; _i < magicainName3_1.length; _i++) {
        var magician = magicainName3_1[_i];
        // Print the name of the current magician to the console
        console.log(magician);
    }
}
// Define a function named make_great3 that takes one parameter: magicainName3 (an array of strings)
function make_great3(magicainName3) {
    // Declare an array of strings named great_magicain to hold the modified magician names
    var great_magicain = [];
    // Start a for...of loop to iterate over each element in the magicainName3 array
    for (var _i = 0, magicainName3_2 = magicainName3; _i < magicainName3_2.length; _i++) {
        var magician = magicainName3_2[_i];
        // Add "The Great " to the current magician's name and push it to the great_magicain array
        great_magicain.push("The Great ".concat(magician));
    }
    // Print the modified array to the console
    console.log(great_magicain);
}
// Call the make_great3 function with the magicainName3 array as an argument
make_great3(magicainName3);
// Call the show_magicians3 function with the magicainName3 array as an argument
show_magicians3(magicainName3);
// Print the original magicainName3 array to the console to show it remains unchanged
console.log(magicainName3);
