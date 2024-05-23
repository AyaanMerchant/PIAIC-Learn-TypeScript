var programmingLanguage = [
    "javaScript",
    "Python",
    "C++",
    "Java",
    "Swift",
    "Typescript",
    "Go",
    "PHP",
    "C",
    "Ruby"
];
// Declare and initialize an array called 'programmingLanguage' of type 'string[]' with names of various programming languages.
function displayLanguages(Languages) {
    // Declare a function named 'displayLanguages' that takes a parameter 'Languages' of type 'string[]' and returns void (no return value).
    console.log("List Of Programming Languages:");
    // Log a message to the console to indicate the start of the list of programming languages.
    Languages.forEach(function (language) {
        console.log(language);
        // Iterate over each element in the 'Languages' array and log it to the console.
    });
}
displayLanguages(programmingLanguage);
// Call the 'displayLanguages' function with the 'programmingLanguage' array as an argument to display the list of programming languages.
