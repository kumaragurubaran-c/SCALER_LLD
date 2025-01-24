let cap = {
name: "steve",
age: 34
}

let league = {
    name:"superman",
    age: 2000
}

// for(let key in cap){
//     console.log(key," " ,cap[key]);
// }

let res = Object.assign(league,cap);
console.log(res)