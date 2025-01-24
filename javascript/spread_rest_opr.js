const arr = [1,3,5];
let arr2 = arr;
console.log(arr2); // call by ref

arr2.push(2,4);
console.log("arr :", arr);
console.log("arr2 :", arr2);

//spread operator(shallow-clone)
//de-structuring
let arr3 = [...arr];
arr3.push(6);
console.log("latest arr :", arr);
console.log("latest arr2 :", arr2);
console.log("arr3 :", arr3);

const ar = [1,2,[3,4],6];
let ar2 = [...ar];
ar2.push(7);
console.log("ommitted nested object/arr")
console.log("ar :",ar);
console.log("ar2 :",ar2);

ar2[2].push(5);
// nested arrays still refer to the address.
console.log("latest ar :",ar);
console.log("latest ar2 :",ar2);

// to overcome nested array issues stringify is used
let ar3 = JSON.parse(JSON.stringify(ar));
ar3[2].push(10);
console.log("latest ar :",ar);
console.log("latest ar3 :",ar3);
ar3.push(11);
console.log("latest ar :",ar);
console.log("latest ar3 :",ar3);

/*------------ rest operator-------------*/
rest_opr = function(param, ...params){
console.log("rest call",param,params);
}

rest_opr("arun","mahi","guru");