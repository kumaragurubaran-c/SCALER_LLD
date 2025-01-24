// let a = "guru"
// {
//     let a = "arun";
//     // console.log(a);
// }

// let actress = {
//     name: "emma watson",
//     country: "UK"
// }

// for (let key in actress) {
//     // console.log(key ," ", actress[key]);
//     // console.log(key ," ", actress.key); //un defined
// }

// // push affects both arrays cuz both points to same address in stack memory
// const arr = [12, 34, 6, 7];
// let ar2 = arr;
// console.log("old arr", arr);
// console.log("old ar2", ar2);
// ar2.push(9);
// console.log("latest arr", arr);
// console.log("latest ar2", ar2);

// // to overcome this spread opr is used to do shallow cloning
// let ar3 = [...arr];
// ar3.push(10);
// console.log("after spread arr", arr);
// console.log("after spread ar3", ar3);

const rest_opr = function (param1, ...param2) {
console.log(param1,param2);
}

rest_opr("guru", "arun", "mahi");