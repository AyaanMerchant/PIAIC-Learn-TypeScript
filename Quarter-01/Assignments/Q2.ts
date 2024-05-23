let myName: string = "Ayaan Merchant" // Declare a variable named 'myName' of type string and assign it the value "Ayaan Merchant"

console.log("Upper Case:" + myName.toUpperCase()) // Log the string "Upper Case:" concatenated with the value of 'myName' converted to upper case to the console
console.log("Lower Case:" + myName.toLowerCase()) // Log the string "Lower Case:" concatenated with the value of 'myName' converted to lower case to the console
console.log("Title Case:" + myName.substring(0, 1).toUpperCase() + myName.substring(1, 5).toLowerCase() + " " + myName.substring(6, 7).toUpperCase() + myName.substring(7).toLowerCase()) 
// Log the string "Title Case:" concatenated with 'myName' formatted in title case to the console
// The title case formatting is done by converting the first letter and the first letter after the space to uppercase and the rest to lowercase
