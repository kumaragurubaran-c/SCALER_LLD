function get(objectParam,pathParam,defaultValue){
    let pp = Array.isArray(pathParam)? pathParam : pathParam.split(".");
    console.log(pp);
}

carol = {
    name:"Mahi",
    age : 27
}

get(carol, "details.personal.firstName")