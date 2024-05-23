// Declare an array of strings named animals and assign it various animal names
var animals = ["dog", "cat", "rabbit"];
// Start a for...of loop to iterate over each element in the animals array
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    // Print a message stating that the current animal would make a great pet
    console.log("A ".concat(animal, " would make a great pet."));
}
// Print a message stating that any of these animals would make a great pet
console.log("\nAny of these animals would make a great pet!");
