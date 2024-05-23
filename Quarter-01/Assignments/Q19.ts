let guest4: string[] = ["Sabah", "Fatimah", "Alishba"]
// Declare and initialize an array called 'guest4' of type 'string[]' with names of guests.

function countGuest(list: string[]): number {
    // Declare a function named 'countGuest' that takes a parameter 'list' of type 'string[]' and returns a value of type 'number'.
    return list.length;
    // Return the length of the 'list' array, which represents the number of guests.
}

console.log("The Total Guest Invited", countGuest(guest4))
// Log a message to the console displaying the total number of guests invited. The message includes the result of the 'countGuest' function when called with the 'guest4' array as an argument.
