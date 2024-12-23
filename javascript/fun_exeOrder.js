console.log(a)
var a = 10;
function fun(){
    console.log("Hey baby");
    function innerFun(){
        console.log("kya kar rahe ho");
    }

    innerFun();
}

fun();