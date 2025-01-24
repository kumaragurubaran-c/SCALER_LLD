/*Write a function that checks if a given value is an instance of a given class or superclass. 
For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function.
For example, the value or the class could be undefined. */

function checkIfInstanceOf(obj, classFunction) {
    // Check if classFunction is a valid function (constructor or class)
    if (typeof classFunction !== "function") {
        return false;
    }

    // Handle cases where obj is null or undefined
    if (obj == null) {
        return false;
    }

    // Use the prototype chain to check if obj is an instance of classFunction
    let proto = Object.getPrototypeOf(obj);
    while (proto) {
        if (proto === classFunction.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}

class Animal { }
class Dog extends Animal { }

const dog = new Dog();

console.log(checkIfInstanceOf(dog, Dog)); // true
console.log(checkIfInstanceOf(dog, Animal)); // true
console.log(checkIfInstanceOf(dog, Object)); // true
console.log(checkIfInstanceOf(dog, Array)); // false
console.log(checkIfInstanceOf(null, Animal)); // false
console.log(checkIfInstanceOf(undefined, Animal)); // false
console.log(checkIfInstanceOf(dog, "not a function")); // false