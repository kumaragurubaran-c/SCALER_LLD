console.log("Before");

function fn(){
    console.log("function call");
}

setTimeout(fn,1000);
console.log("After");