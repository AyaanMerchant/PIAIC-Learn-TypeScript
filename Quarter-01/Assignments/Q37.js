// Declare a function named makeTshirt2 that takes two parameters: size (a string) and message (a string)
// Both parameters have default values: "large" for size and "I Love TypeScript" for message
function makeTshirt2(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    // Print a message stating the size of the T-shirt
    console.log("The Size Of The T-shirt Is \"".concat(size, "\""));
    // Print a message stating the message printed on the T-shirt
    console.log("The Message Printed On The T-shirt Is \"".concat(message, "\"\n"));
}
// Call the makeTshirt2 function without any arguments, using the default values
makeTshirt2();
// Call the makeTshirt2 function with the argument "Medium", using the default message
makeTshirt2("Medium");
// Call the makeTshirt2 function with the arguments "Small" and "I love Pakistan"
makeTshirt2("Small", "I love Pakistan");
