let guest3: string[] = ["Sabah", "Fatimah", "Alishba"]
// Declare and initialize an array called 'guest3' of type 'string[]' with names of guests.

for (let i = 0; i <= 2; i++) {
    // Start a for loop with the variable 'i' initialized to 0. The loop will run as long as 'i' is less than or equal to 2, incrementing 'i' by 1 after each iteration.
    
    console.log(`${guest3[i]}, you are invited to party`)
    // Log a message to the console for each guest in the 'guest3' array. The message includes the guest's name at index 'i' followed by the string "you are invited to party".
}

console.log(`\n${guest3[1]} Ap mat ana jaga nhy hai!\n`)
// Log a message to the console indicating that the guest at index 1 (Fatimah) is not invited to the party anymore. The message is followed by newlines for spacing.

guest3.splice(1, 1)
// Remove the guest at index 1 (Fatimah) from the 'guest3' array.

guest3.push("Areesh")
// Add a new guest, "Areesh", to the end of the 'guest3' array.

for (let i = 0; i <= 2; i++) {
    // Start a for loop with the variable 'i' initialized to 0. The loop will run as long as 'i' is less than or equal to 2, incrementing 'i' by 1 after each iteration.
    
    console.log(`${guest3[i]}, you are invited to party`)
    // Log a message to the console for each guest in the updated 'guest3' array. The message includes the guest's name at index 'i' followed by the string "you are invited to party".
}

guest3.unshift("Ayaan")
// Add a new guest, "Ayaan", to the start of the 'guest3' array.

guest3.splice(2, 0, "Hussain")
// Add a new guest, "Hussain", to the middle of the 'guest3' array at index 2.

guest3.push("Irfan")
// Add a new guest, "Irfan", to the end of the 'guest3' array.

for (let a = 0; a < guest3.length; a++) {
    // Start a for loop with the variable 'a' initialized to 0. The loop will run as long as 'a' is less than the length of the 'guest3' array, incrementing 'a' by 1 after each iteration.
    
    console.log(`${guest3[a]} Ap logo ko Party mai ana hai!`)
    // Log a message to the console for each guest in the 'guest3' array. The message includes the guest's name at index 'a' followed by the string "Ap logo ko Party mai ana hai!".
}

console.log("Meri hat gyi hn ab sirf 2 guest askatye hain")
// Log a message to the console indicating that only 2 guests can be invited now.

while (guest3.length > 2) {
    // Start a while loop that will run as long as the length of the 'guest3' array is greater than 2.
    
    let guestRemove = guest3.pop()
    // Remove the last guest from the 'guest3' array and store the removed guest's name in the 'guestRemove' variable.
    
    if (guestRemove) {
        console.log(`Sorry, ${guestRemove} ap nhy ana please!`)
        // If a guest was removed (i.e., 'guestRemove' is not null or undefined), log a message to the console apologizing to the removed guest.
    }
}

console.log(`Final List is ${guest3}`)
// Log the final list of guests who are still invited to the console.

guest3.splice(0, guest3.length)
// Remove all remaining guests from the 'guest3' array.

console.log("Empty List", guest3)
// Log a message to the console indicating that the guest list is now empty.
