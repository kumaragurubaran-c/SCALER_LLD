console.log("Before");
const cb1 = () => {
    console.log("Settimeout 1");
    // while(1){}
}
const cb2 = () => console.log("hello");
setTimeout(cb2, 2000);
setTimeout(cb1, 1000);
setTimeout(()=>{
console.log("setTimeoutArrow");
},500)
console.log("After");
