const ar = [1, 2, 3, 4, 5];
ar.unshift(0); //add element at the begining of array
// console.log(ar);

const ar1 = [4, 5, 6, 7];
ar1.shift(); //remove first element of array
// console.log(ar1);

const ar3 = [3, 4, 5, 7, 8];
ar3.push(8); //add elemennt at the end of thw array
// console.log(ar3);

const ar4 = [6, 7, 8, 9];
ar4.pop(); //remove element at the end of the array
// console.log(ar4);

//splice
//add, removing and replacing
let spliceArr = [12, 5, 4, 8, 3]
const removeIdx = spliceArr.splice(1, 2); // extracts removed array
// console.log(removeIdx);
// console.log("spliceArr", spliceArr);


//split
const str = "Hi I'm guru";
const strArr = str.split(" ");
console.log(strArr);
const mergedStr = strArr.join("+");
console.log(mergedStr);