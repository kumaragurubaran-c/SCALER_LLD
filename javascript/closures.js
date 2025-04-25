//closures
let num = 10;
// inner() forms closure with outer

/*
function outer(){
    let num = 20;
    console.log(num);
    function inner(){
        console.log(num);
    }
    inner();
}

outer();
 */

/* */

function outerFunction(init, delta) {
    function inner() {
        init = init + delta;
        return init;
    }
    return inner;
}

const result = outerFunction(5, 10);
console.log(result());
console.log(result());
console.log(result());