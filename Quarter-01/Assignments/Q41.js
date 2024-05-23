// Declare an array of strings named magicainName and assign it various magician names
var magicainName = ["Ayaan", "Areesh", "Ali", "Husain"];
// Define a function named show_magicians that takes one parameter: magicainName (an array of strings)
function show_magicians(magicainName) {
    // Start a for...of loop to iterate over each element in the magicainName array
    for (var _i = 0, magicainName_1 = magicainName; _i < magicainName_1.length; _i++) {
        var magician = magicainName_1[_i];
        // Print the name of the current magician to the console
        console.log(magician);
    }
}
// Call the show_magicians function with the magicainName array as an argument
show_magicians(magicainName);
