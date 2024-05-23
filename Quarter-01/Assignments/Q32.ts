// Declare an array of strings named currentUser and assign it various names
let currentUser: string[] = ["Ayaan", "Ali", "Areesh", "Fatimah", "Sara", "Anusha"];

// Declare an array of strings named newUser and assign it various names
let newUser: string[] = ["Ayaan", "Fatimah", "Hussain", "Iqbal"];

// Start a for loop to iterate over each element in the newUser array
for (let a = 0; a < newUser.length; a++) {
    // Declare a boolean variable isAvailable and set it to true
    let isAvailable: boolean = true;

    // Start a nested for loop to iterate over each element in the currentUser array
    for (let b = 0; b < currentUser.length; b++) {
        // Check if the current element in newUser (converted to lowercase) matches the current element in currentUser (converted to lowercase)
        if (newUser[a].toLowerCase() === currentUser[b].toLowerCase()) {
            // If a match is found, set isAvailable to false and break out of the loop
            isAvailable = false;
            break;
        }
    }

    // Check if isAvailable is true
    if (isAvailable) {
        // If isAvailable is true, print a message indicating that the username is available
        console.log(`The UserName ${newUser[a]} is Available`);
    }
    // If isAvailable is false
    else {
        // Print a message indicating that the username has already been used and ask to enter a new username
        console.log(`The userName ${newUser[a]} has already been used. Please enter a new username`);
    }
}
