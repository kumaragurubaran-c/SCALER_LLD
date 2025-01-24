const iife = (function () {
    let name = "guru";
    return "Hello, " + name + "!";
})();

console.log(iife);
name = "arun";
console.log(iife);