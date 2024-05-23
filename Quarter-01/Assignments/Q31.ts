// Declare an array of strings named userName2 and assign it various names including "Admin"
let userName2: string[] = ["Ayaan", "Fatimah", "Hussain", "Iqbal", "Areesh", "Admin", "Ali", "Ahmed"];

// Check if the userName2 array is empty
if (userName2.length === 0) {
    // If the array is empty, print a message indicating the need to find some users
    console.log("We Need To find Some Users")
}
// If the userName2 array is not empty
else {
    // Start a for loop to iterate over each element in the userName2 array
    for (let a = 0; a < userName2.length; a++) {
        // Check if the current element is "Admin"
        if (userName2[a] === "Admin") {
            // If the current element is "Admin", print a special message to the console
            console.log("Hello Admin, would you like to see the status Report?")
        }
        // If the current element is not "Admin"
        else {
            // Print a personalized greeting message for the current user to the console
            console.log(`Hello ${userName2[a]}, Thank You For Logging In Again`)
        }
    }
}
