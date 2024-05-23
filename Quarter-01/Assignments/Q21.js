// simple object
var user1 = {
    name: "Ayaan Merchant",
    age: 22,
    email: "krmkae786@gmail.com"
};
// Declare and initialize a simple object called 'user1' with properties 'name', 'age', and 'email'.
console.log(user1);
// Log the 'user1' object to the console.
// adding methods to object
var user2 = {
    name: "Ayaan Merchant",
    age: 22,
    email: "krmkae786@gmail.com",
    greet: function () {
        console.log("Hello, My Name is ".concat(this.name));
    }
};
// Declare and initialize an object called 'user2' with properties 'name', 'age', and 'email'. Add a method 'greet' to the object that logs a greeting message to the console using the 'name' property.
user2.greet();
// Declare an interface named 'User' with properties 'name', 'age', 'email', and a method 'greet' that returns void.
var user3 = {
    name: "Ayaan Merchant",
    age: 22,
    email: "krmkae786@gmail.com",
    greet: function () {
        console.log("Hello, My Name is ".concat(this.name, ", My Age is ").concat(this.age, " old"));
    }
};
// Declare and initialize an object called 'user3' that adheres to the 'User' interface. The object includes properties 'name', 'age', 'email', and a 'greet' method that logs a greeting message to the console using the 'name' and 'age' properties.
user3.greet();
// Call the 'greet' method of the 'user3' object to log the greeting message to the console.
var user = {};
// Declare and initialize an empty object called 'user' with the type 'any'.
user.name = "Ayaan Merchant";
// Add a 'name' property to the 'user' object.
user.age = 22;
// Add an 'age' property to the 'user' object.
user.setEmail = function (email) {
    this.email = email;
};
// Add a 'setEmail' method to the 'user' object that takes a parameter 'email' of type 'string' and sets the 'email' property of the object.
user.setEmail("krmkae786@gmail.com");
// Call the 'setEmail' method of the 'user' object with the email "krmkae786@gmail.com" to set the 'email' property.
console.log(user);
// Log the 'user' object to the console to display its properties and methods.
