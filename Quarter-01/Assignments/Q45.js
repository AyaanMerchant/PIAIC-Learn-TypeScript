var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Define a function named createCar that takes three parameters: manufacturer (a string), model (a string), and an optional options object
// The function returns an object that adheres to the Car type
function createCar(manufacturer, model, options) {
    // Return an object with the manufacturer, model, and spread the options object to include additional properties
    return __assign({ manufacturer: manufacturer, model: model }, options);
}
// Call the createCar function to create a car object with additional properties and assign it to car1
var car0 = createCar("Toyota", "Corolla", { color: "Red", year: 2021 });
// Call the createCar function to create a car object with additional properties and assign it to car2
var car2 = createCar("Tesla", "Model S", { color: "Black", autopilot: true });
// Call the createCar function to create a car object with additional properties and assign it to car3
var car3 = createCar("Ford", "Mustang", { color: "Blue", convertible: true, horsepower: 450 });
// Print the car objects to the console
console.log(car0);
console.log(car2);
console.log(car3);
