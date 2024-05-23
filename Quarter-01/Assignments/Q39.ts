// Declare a function named city_country that takes two parameters: city (a string) and country (a string)
function city_country(city: string, country: string):string {
    // Print a formatted string containing the city and country in the format "city, country"
    return`${city}, ${country}`;
}

// Call the city_country function with the arguments "Lahore" and "Pakistan"
let city1 = city_country("Lahore", "Pakistan");

console.log(city1)
