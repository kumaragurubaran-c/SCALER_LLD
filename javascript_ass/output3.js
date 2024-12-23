let a = 10;
console.log("line 2", a);
function fn(){
    let a = 20;
    console.log("line 4", a);
    a++;
    console.log("line 7", a);
    if(a){
        let a = 30;
        a++;
        console.log("line 11",a)
    }
    console.log("line 13", a)
}

fn();
console.log("line 16", a);

// 10 20 21 31 21 10