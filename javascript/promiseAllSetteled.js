const promise1 = Promise.resolve(200);
const promise2 = Promise.reject(404)
const promise3 = new Promise((resolve, reject) => {
    try {
        setTimeout(() => { resolve(500), 100 })
    } catch (err) {
        reject(err);
    }
});

Promise.myAllSettled = (promises) => {
    return new Promise((resolve, reject) => {
        const results = [];
        let remaining = promises.length;
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then((data) => {
                results[i] = { status: 'fulfilled', value: data };
                console.log("results", results);
            }).catch((err) => {
                results[i] = { status: 'rejected', value: data };
                console.log("results", results);
            }).finally(() => {
                remaining--;
                if (remaining === 0) {
                    resolve(results);
                }
            })
        }
    })
}

Promise.allSettled([promise1, promise2, promise3])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("err", err);
    })