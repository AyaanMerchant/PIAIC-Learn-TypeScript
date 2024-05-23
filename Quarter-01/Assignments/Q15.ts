let guest1: string[] = ["Sabah", "Fatimah", "Alishba"]
// Declare and initialize an array called 'guest1' of type 'string[]' with names of guests.

for (let i = 0; i <= 2; i++) {
    // Start a for loop with the variable 'i' initialized to 0. The loop will run as long as 'i' is less than or equal to 2, incrementing 'i' by 1 after each iteration.

    console.log(`${guest1[i]},you are invited to party`)
    // Log a message to the console for each guest in the 'guest1' array. The message includes the guest's name at index 'i' followed by the string "you are invited to party".
}

console.log(`\n${guest1[1]} Ap mat ana jaga nhy hai!\n`)
// Log a message to the console indicating that the guest at index 1 (Fatimah) is not invited to the party anymore. The message is followed by newlines for spacing.

guest1.splice(1, 1)
// Remove the guest at index 1 (Fatimah) from the 'guest1' array.

guest1.push("Areesh")
// Add a new guest, "Areesh", to the end of the 'guest1' array.

for (let i = 0; i <= 2; i++) {
    // Start a for loop with the variable 'i' initialized to 0. The loop will run as long as 'i' is less than or equal to 2, incrementing 'i' by 1 after each iteration.

    console.log(`${guest1[i]},you are invited to party`)
    // Log a message to the console for each guest in the updated 'guest1' array. The message includes the guest's name at index 'i' followed by the string "you are invited to party".
}
