//functions
function fn(param){
    console.log("Hey morning", param)
    console.log("Hey morning"+ param)
    console.log("Hey morning",param)
}

function func(parameter){
    console.log("parameter",parameter); //undefined
}

func();
func(augument); //not defined

let arg = "Mahi";
fn(arg);

let argument;
console.log(argument); //undefined