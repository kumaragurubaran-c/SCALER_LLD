/*
function outerCounter(init, delta){
    function count(){
        this.init = init + delta;
        return this.init;
    }
    return count();
}

const e1 = outerCounter(10,5);
console.log(e1);
*/


let init = 10;
function outerCounter(delta){
    function count(){
        init = init + delta;
        return init;
    }
    return count();
}

const e1 = outerCounter(5);
console.log(e1);

const e3 = outerCounter(5);
console.log(e3);


// let num = 10;

// function fn() {
//   let num = 20;
//   console.log(num);
//   // its memory (inside b()) + lexical scope for closure
//   function b() {
//     console.log(num);
//   }
//   return b;
// }

// const returnedFn = fn();

// returnedFn();

// function outerFunction() {
//   let count = 0;
//   function innerFunction() {
//     count++;
//     return count;
//   }
//   return innerFunction;
// }

// const innerFunc = outerFunction();
// console.log(innerFunc()); // 1
// console.log(innerFunc()); // 2
// console.log(innerFunc()); // 3

// const innerFunc1 = outerFunction();
// console.log(innerFunc1()); // 1
// console.log(innerFunc1()); // 2
// console.log(innerFunc1()); // 3



