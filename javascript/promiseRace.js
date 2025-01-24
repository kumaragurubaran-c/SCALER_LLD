const pro1 = Promise.resolve(200);
const pro2 = Promise.reject(400);
const pro3 = new Promise((resolve,reject)=>{
    try{
        setTimeout(()=>{resolve(500),100})
    }catch (err) {
        reject(err);
    }
});

Promise.myRace = (racePromises) =>{
    return new Promise((resolve,reject)=>{
        for(let i = 0; i<racePromises.length;i++){
            Promise.resolve(racePromises[i]).then((data)=>{  
                resolve(data);
            }).catch((err)=>{
                reject(err)
            });
        }
    })
}

Promise.race([pro1,pro2,pro3]).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err);
})