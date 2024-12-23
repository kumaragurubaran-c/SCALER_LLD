let a = "this only woks if and only if";
let b = a.slice(a.indexOf("only")); // "only woks if and only if"
let c = b.lastIndexOf("only"); // 14
b[c] = "i"; // Invalid because strings are immutable
console.log(a); 
console.log(b);
