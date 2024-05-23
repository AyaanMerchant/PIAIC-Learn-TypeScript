// Declare an array of strings named magicainName2 and assign it various magician names
let magicainName2: string[] = ["Ayaan", "Areesh", "Ali", "Husain"];

// Define a function named make_great that takes one parameter: magicainName2 (an array of strings)
function make_great(magicainName2: string[]) {
    // Start a for loop to iterate over each element in the magicainName2 array
        for (let a = 0; a < magicainName2.length; a++) {
            // Modify each element in the magicainName2 array to prepend "The Great " to the magician's name
            magicainName2[a] = `The Great ${magicainName2[a]}`;
        }
    // Print the modified array to the console
    console.log(magicainName2);
}

// Call the make_great function with the magicainName2 array as an argument
make_great(magicainName2);
