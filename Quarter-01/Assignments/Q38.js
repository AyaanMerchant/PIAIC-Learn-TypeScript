// Declare a function named describeCity that takes two parameters: city (a string) and country (a string)
// Both parameters have default values: "Karachi" for city and "Pakistan" for country
function describeCity(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    // Print a message stating the city and the country it is in
    console.log("".concat(city, " Is In ").concat(country));
}
// Call the describeCity function without any arguments, using the default values
describeCity();
// Call the describeCity function with the arguments "Texas" and "USA"
describeCity("Texas", "USA");
// Call the describeCity function with the arguments "Toronto" and "Canada"
describeCity("Toronto", "Canada");
