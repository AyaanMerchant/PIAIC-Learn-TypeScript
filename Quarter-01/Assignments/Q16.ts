let guest2: string[] = ["Sabah", "Fatimah", "Alishba"]
// Declare and initialize an array called 'guest2' of type 'string[]' with names of guests.

for (let i = 0; i <= 2; i++) {
    // Start a for loop with the variable 'i' initialized to 0. The loop will run as long as 'i' is less than or equal to 2, incrementing 'i' by 1 after each iteration.

    console.log(`${guest2[i]}, you are invited to party`)
    // Log a message to the console for each guest in the 'guest2' array. The message includes the guest's name at index 'i' followed by the string "you are invited to party".
}

console.log(`\n${guest2[1]} Ap mat ana jaga nhy hai!\n`)
// Log a message to the console indicating that the guest at index 1 (Fatimah) is not invited to the party anymore. The message is followed by newlines for spacing.

guest2.splice(1, 1)
// Remove the guest at index 1 (Fatimah) from the 'guest2' array.

guest2.push("Areesh")
// Add a new guest, "Areesh", to the end of the 'guest2' array.

for (let i = 0; i <= 2; i++) {
    // Start a for loop with the variable 'i' initialized to 0. The loop will run as long as 'i' is less than or equal to 2, incrementing 'i' by 1 after each iteration.

    console.log(`${guest2[i]}, you are invited to party`)
    // Log a message to the console for each guest in the updated 'guest2' array. The message includes the guest's name at index 'i' followed by the string "you are invited to party".
}

guest2.unshift("Ayaan")
// Add a new guest, "Ayaan", to the start of the 'guest2' array.

guest2.splice(2, 0, "Hussain")
// Add a new guest, "Hussain", to the middle of the 'guest2' array at index 2.

guest2.push("Irfan")
// Add a new guest, "Irfan", to the end of the 'guest2' array.

for (let a = 0; a < guest2.length; a++) {
    // Start a for loop with the variable 'a' initialized to 0. The loop will run as long as 'a' is less than the length of the 'guest2' array, incrementing 'a' by 1 after each iteration.

    console.log(`${guest2[a]} Ap logo ko Party mai ana hai!`)
    // Log a message to the console for each guest in the 'guest2' array. The message includes the guest's name at index 'a' followed by the string "Ap logo ko Party mai ana hai!".
}
