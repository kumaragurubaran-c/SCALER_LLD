/*Hint 1:
When a function is called without the new keyword, this is set to the global object in non-strict mode and undefined in strict mode. 
You can use a condition to check if this is an instance of Person to decide whether to re-invoke the constructor with new.

Hint 2:
Consider using a conditional statement inside the constructor to check whether this is an instance of the constructor function (Person). 
If not, use return new Person(name, age); to force the correct behavior. */

function Person(name, age) {
    //Added codition to check whether this is an instance of the constructor function (Person) to work as expected.
    if (!(this instanceof Person)) {
        return new Person(name, age)
    }
    this.name = name;
    this.age = age;
}

// Create a new Person object correctly
const john = new Person("John", 30);
console.log(john.name, john.age); // Output: 'John', 30

// Bug: Calling without `new` does not create a new Person object
const jane = Person("Jane", 25);
console.log(jane.name, jane.age); // Output: Error or `undefined`, `undefined`