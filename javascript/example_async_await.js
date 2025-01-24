const promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(500)
        }, 2000);
    });
}

// pro().then((data)=>{
//     console.log(data);
// })

const pr = async () =>{
    try{
        const result = await promise();
        return result;
    }catch(err){
        console.log("error from promise",err)
    }
};
pr();