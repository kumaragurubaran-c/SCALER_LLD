//Higher order function
// Higher order functions are function that take functions as their arguments and return result
function hof(var1,var2,callback){
    return callback(var1,var2);
}

function add(var1,var2){
    const res = var1+var2;
    return res;
}

function sub(var1,var2){
    return res = var1 - var2;
}

const addRes = hof(3,5,add);
console.log("addRes", addRes);

const subRes = hof(9,4,sub);
console.log("subRes", subRes);




