function fetchByPromise(fileName) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`content : ${fileName}`);
        }, 100 * Math.random());
    });
}

async function twoSeries(file1, file2, ansArray) {
    //write your code here =========================================
    try {
        const firstFile = await fetchByPromise(file1);
        console.log(firstFile);
        ansArray.push(firstFile);
        const secondFile = await fetchByPromise(file2);
        console.log(secondFile);
        ansArray.push(secondFile);
        ansArray.push("All files have been read");
        console.log(ansArray);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("All files have been read");
    }
}
let ansArray = [];
twoSeries('FILE 1', 'FILE 2', ansArray)