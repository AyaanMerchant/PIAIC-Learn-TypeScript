let guest: string[] = ["Sabah", "Fatimah", "Alishba"]
// Declare and initialize an array called 'guest' of type 'string[]' with names of guests.

for(let i = 0; i <= 2; i++){
    // Start a for loop with the variable 'i' initialized to 0. The loop will run as long as 'i' is less than or equal to 2, incrementing 'i' by 1 after each iteration.
    
    console.log(guest[i], "you are invited to party")
    // Log a message to the console for each guest in the 'guest' array. The message includes the guest's name at index 'i' followed by the string "you are invited to party".
}
