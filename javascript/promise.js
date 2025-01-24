const fs = require("fs");

// const promise = fs.promises.readFile("./file1.txt");
// // console.log(promise);

// //Promise syntax 1
// promise.then((futureValue) => {
//     console.log(futureValue.toString());
// })
// promise.catch((err) => {
//     console.log(err.toString());
// })
// promise.finally(() => {
//     console.log("finally executes");
// })

// // promise chain syntax
// const promises = fs.promises.readFile("./file2.txt");
// promises.then((data) => {
//     console.log(data.toString());
// }).catch((err) => {
//     console.log(err.toString());
// }).finally(() => {
//     console.log("finally call");
// });

// promise chain multiple file read syntax
// const prom = fs.promises.readFile("./myFile.txt");
// prom.then((data) => {
//     console.log(data.toString());
//     const prom2 = fs.promises.readFile("./myFiled.txt");
//     prom2.then((dataValue) => {
//         console.log(dataValue.toString());
//     }).catch((err) => {
//         console.log(err.toString());
//     })
// }).catch((err) => {
//     console.log(err.toString());
// }).finally(() => {
//     console.log("finally call");
// });

//promise optimised approach

const promise = fs.promises.readFile("./myFile.txt");
promise.then((dataFile)=>{
    console.log(dataFile.toString());
    const promise1 = fs.promises.readFile("./file1.txt");
    return promise1;
}).then((promise1Data)=>{
    console.log(promise1Data.toString());
    const promise2 = fs.promises.readFile("./file2.txt");
    return promise2;
}).then((promise2Data)=>{
    console.log(promise2Data.toString());
}).catch((err)=>{
    console.log(err.toString());
})