
const arr3 = ['a','b','c'];

Array.prototype.sum  = function()  {
    let sum = 0;
    for(let i = 0 ;  i < this.length; i++){
        sum +=this[i];
    }
    console.log(sum);
}

Array.prototype.guru = function() {
    let mul = 1;
    for(let i = 0; i<this.length;i++){
        mul = mul*this[i];
    }
    console.log(mul);
}
 
let arr = [1,2,3];
const arr1 = [4,5];