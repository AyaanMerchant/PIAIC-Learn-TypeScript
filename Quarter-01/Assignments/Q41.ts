// Declare an array of strings named magicainName and assign it various magician names
let magicainName: string[] = ["Ayaan", "Areesh", "Ali", "Husain"];

// Define a function named show_magicians that takes one parameter: magicainName (an array of strings)
function show_magicians(magicainName: string[]) {
    // Start a for...of loop to iterate over each element in the magicainName array
    for (let magician of magicainName) {
        // Print the name of the current magician to the console
        console.log(magician);
    }
}

// Call the show_magicians function with the magicainName array as an argument
show_magicians(magicainName);
