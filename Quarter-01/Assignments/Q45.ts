// Define a type named Car with required properties manufacturer and model, and allow additional properties using an index signature
type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any;
};

// Define a function named createCar that takes three parameters: manufacturer (a string), model (a string), and an optional options object
// The function returns an object that adheres to the Car type
function createCar(manufacturer: string, model: string, options?: { [key: string]: any }): Car {
    // Return an object with the manufacturer, model, and spread the options object to include additional properties
    return {
        manufacturer,
        model,
        ...options
    };
}

// Call the createCar function to create a car object with additional properties and assign it to car1
let car0 = createCar("Toyota", "Corolla", { color: "Red", year: 2021 });

// Call the createCar function to create a car object with additional properties and assign it to car2
let car2 = createCar("Tesla", "Model S", { color: "Black", autopilot: true });

// Call the createCar function to create a car object with additional properties and assign it to car3
let car3 = createCar("Ford", "Mustang", { color: "Blue", convertible: true, horsepower: 450 });

// Print the car objects to the console
console.log(car0);
console.log(car2);
console.log(car3);
