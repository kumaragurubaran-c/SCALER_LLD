function polyReduce(array, reducer) {
    let initialValue = array[0];
    let startIndex = 1;
    for (let i = startIndex; i < array.length; i++) {
        total = reducer(initialValue, array[i]);
    }
    return total;
}

let array = [1,5,3,4,6,8];

console.log(polyReduce(array,reducer));

function reducer(val1,val2){
   return val1+val2;
}

