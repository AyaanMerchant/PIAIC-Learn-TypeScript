// Declare an array of strings named userName and assign it various names including "Admin"
var userName = ["Ayaan", "Fatimah", "Hussain", "Iqbal", "Areesh", "Admin", "Ali", "Ahmed"];
// Start a for loop to iterate over each element in the userName array
for (var a = 0; a < userName.length; a++) {
    // Check if the current element is "Admin"
    if (userName[a] === "Admin") {
        // If the current element is "Admin", print a special message to the console
        console.log("Hello Admin, would you like to see the status Report?");
    }
    // If the current element is not "Admin"
    else {
        // Print a personalized greeting message for the current user to the console
        console.log("Hello ".concat(userName[a], ", Thank You For Logging In Again"));
    }
}
