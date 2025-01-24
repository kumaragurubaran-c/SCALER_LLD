//all resolve flow;
//all promises to be resolved if else the rejected will be printed in catch
/*const promise = Promise.resolve(3);
const promise2 = 2; //(cast) Promise.resolve(2)
const promise3 = Promise.resolve("any random string");

Promise.all([promise,promise2,promise3]).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("all finally lock");
});*/

const { error } = require("console");

//all reject flow
/*
const promise1 = Promise.reject(4);
const promise4 = Promise.resolve(2);
const promise5 = Promise.reject(5);

Promise.all([promise1,promise4,promise5]).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("error", error);
}).finally(()=>{
    console.log("all finally block executes");
})
 */

//allsetteled flow returns value and status
/*
const promise1 = Promise.reject(4);
const promise4 = Promise.resolve(2);
const promise5 = Promise.reject(5);

Promise.allSettled([promise1,promise4,promise5]).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("error", error);
}).finally(()=>{
    console.log("allsetteled finally block executes");
});
*/

//any 
/*
const promise6 = Promise.reject(4);
const promise7 = Promise.resolve(2);
const promise8 = Promise.reject(5);

Promise.allSettled([promise6,promise7,promise8]).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("error", error);
}).finally(()=>{
    console.log("all finally block executes");
});

*/
//race 
const promised = new Promise((resolve,reject)=>{
    try {
        setTimeout(() => {
          resolve("promised is resolved");
        }, 500);
      } catch (error) {
        reject(error);
      }
});
const promises = new Promise((resolve,reject)=>{
    try {
        setTimeout(() => {
          reject("promises is resolved");
        }, 500);
      } catch (error) {
        reject(error);
      }
});
const promising = new Promise((resolve,reject)=>{
    try {
        setTimeout(() => {
          resolve("promising is resolved");
        }, 500);
      } catch (error) {
        reject(error);
      }
});

Promise.allSettled([promised,promises,promising]).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("error", error);
}).finally(()=>{
    console.log("race finally block executes");
});
//*/