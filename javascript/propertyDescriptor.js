const propDesc = {
    name: "Guru"
}

console.log(Object.getOwnPropertyDescriptor(propDesc, "name"));

Object.defineProperty(propDesc, "age",{
    value: 25,
    writable:true,
    enumerable:false,
    configurable:true
});
console.log("after adding age",propDesc);
console.log(Object.entries(propDesc));
for(let entry in propDesc){
    console.log(entry);
}