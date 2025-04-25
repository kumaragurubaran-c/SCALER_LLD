const arr = [1, 4, [5, [3, 2]], 7, 8];


function flattenArr(arr) {
    if(!Array.isArray(arr)){
        throw new Error("expected parameter should be an array");
    }

    let newArr =[];
    for(let i =0;i <arr.length;i++){
        if(Array.isArray(arr[i])){
            newArr.push(...flattenArr(arr[i]));
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const flattened = flattenArr(arr);
// console.log(flattened);

const flatt = arr.flat(Infinity);
console.log(flatt);