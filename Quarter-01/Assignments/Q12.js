var names1 = ["Ayaan", "Sabah", "Ali", "Areesh", "Fatimah"]; // Declare an array named 'names1' of type string and assign it the values ["Ayaan", "Sabah", "Ali", "Areesh", "Fatimah"]
for (var i = 0; i < names1.length; i++) { // Start a for loop with a loop counter 'i' initialized to 0, looping as long as 'i' is less than the length of the 'names1' array, incrementing 'i' by 1 after each iteration
    console.log("Hello! ".concat(names1[i], ", How are You?")); // Log a greeting message concatenated with the element at index 'i' of the 'names1' array to the console, using template literals for string interpolation
}
