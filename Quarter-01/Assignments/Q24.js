var car1 = "Mehran";
// Declare and initialize a variable called 'car1' with the string value "Mehran".
var animal1 = "Dog";
// Declare and initialize a variable called 'animal1' with the string value "Dog".
var age1 = 22;
// Declare and initialize a variable called 'age1' with the numeric value 22.
var height1 = 180;
// Declare and initialize a variable called 'height1' with the numeric value 180.
var fruit1 = ['Apple', 'Banana', 'Orange'];
// Declare and initialize an array called 'fruit1' of type 'string[]' with the string values "Apple", "Banana", and "Orange".
console.log(car1 == "Mehran");
// Log the result of the comparison 'car1 == "Mehran"' to the console. This will log 'true' because 'car1' is equal to "Mehran".
console.log(car1 != "Honda");
// Log the result of the comparison 'car1 != "Honda"' to the console. This will log 'true' because 'car1' is not equal to "Honda".
console.log(animal1 == "Dog");
// Log the result of the comparison 'animal1 == "Dog"' to the console. This will log 'true' because 'animal1' is equal to "Dog".
console.log(animal1 != "Cat");
// Log the result of the comparison 'animal1 != "Cat"' to the console. This will log 'true' because 'animal1' is not equal to "Cat".
console.log(animal1.toLowerCase() == "dog");
// Log the result of the comparison 'animal1.toLowerCase() == "dog"' to the console. This will log 'true' because 'animal1' converted to lowercase is equal to "dog".
console.log(animal1.toLowerCase() == "DOG");
// Log the result of the comparison 'animal1.toLowerCase() == "DOG"' to the console. This will log 'false' because 'animal1' converted to lowercase is "dog", which is not equal to "DOG".
console.log(age1 == 22);
// Log the result of the comparison 'age1 == 22' to the console. This will log 'true' because 'age1' is equal to 22.
console.log(height1 != 185);
// Log the result of the comparison 'height1 != 185' to the console. This will log 'true' because 'height1' is not equal to 185.
console.log(fruit1.indexOf('Banana') !== -1);
// Log the result of the comparison 'fruit1.indexOf('Banana') !== -1' to the console. This will log 'true' because 'Banana' is present in the 'fruit1' array, so indexOf returns its index, which is not -1.
console.log(fruit1.indexOf('PineApple') !== -1);
// Log the result of the comparison 'fruit1.indexOf('PineApple') !== -1' to the console. This will log 'false' because 'PineApple' is not present in the 'fruit1' array, so indexOf returns -1.
