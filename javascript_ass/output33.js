function wrap(fn) {
    return function (...arg) {
        return new Promise((resolve) => {
            fn(...arg,resolve);
        });
    }
}

function add(v1,v2,callback){
    callback(v1+v2);
}

const promise = wrap(add);

promise(5,6).then((data)=>{
    // console.log(data);
});


console.log(res);
// const res = 'arun';