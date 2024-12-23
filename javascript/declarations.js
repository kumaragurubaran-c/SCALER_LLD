//var can be re-declared and re-assignedvar v = 'guru';
var v = 20;
var v = "guru";
console.log(v);
console.log("v type " + typeof v);

//let can be declared only once
let a = 20;
// let a = "arun";
a = "arun";
console.log(a);
console.log("a type " + typeof a);

//const doesn't support redeclaration and re-initialization
const c = "guru";
//const c = 3;
console.log(c);
console.log("a type " + typeof c);

console.log(f); // undefined
var f = "undefined";

/* if a varibale name is accessed before declaration and declared using var it 
throws undefined which leads to unexpected issues.This behavior is due to hoisting, 
which means the variable declaration is moved to the top of its scope at runtime, though its initialization remains in place*/

// this issues was over-come  by let and const variables
console.log(v); // v is used before initialization.
let v = 20;