let obj = {
    obj1: {
        nestobj2: {
            nestobj3: {
                val: "one"
            }
        }
    },
    obj2: {
        nestobj2: {
            val: "two"
        }
    }
}

let flattenObj = (obj) => {
    for(let key in obj){
        // if(typeof obj[key] === 'object' && obj[key]!==null ){
        //     console.log(`${key} is an object`)
        // }
        // console.log(key)
    }
    // return result;
}

console.log(obj.obj1.nestobj2.nestobj3.val);

flattenObj(obj);