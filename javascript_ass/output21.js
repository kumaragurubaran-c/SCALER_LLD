const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error(401));
    }, 2000);
    setTimeout(()=>{
        resolve(201);
    },5000);
    setTimeout(() => {
        reject(new Error(300));
    },2000);
    setTimeout(()=>{
        resolve(501);
    },4000);
})

pro.then((data) => {
    console.log(1);
    console.log(data)
}).catch((err) => {
    console.log(2);
    console.log(err);
}).finally(() => {
    console.log("Finally executed");
})