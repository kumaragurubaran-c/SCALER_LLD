/**
function addfn(val1) {
    if (val1 != undefined) {
        return function arg1(val2) {
            if (val2 != undefined) {
                console.log("received val1")
                return function arg2() {
                    console.log("received val2")
                    return val1 + val2;
                }
            }
            return val1;
        }
    } else {
        return -1;
    }
}
 */


// const val = addfn;
// console.log(val()(3)());
// above and below does the same
/*const val = addfn(2)(3)();
console.log(val);*/


// create a function fn that allows for function chaining and keeps track of the number of function calls made. 
// Each time the function is called, it returns another function, and the count of function calls is incremented. 
// The function chain can be terminated by passing a specific value.
function fn() {
    // Write your solution here ========================
    let count = 0;
    function numFuncCount(x) {
        if (x === 0) {
            return count;
        }
        count++;
        return numFuncCount;
    };
    return numFuncCount();

}


console.log(fn()()()(0));