const me = {
    arg1: "hardDrive",
    arg2: "localStorage",
    obssesed: function (param1, param2) {
        console.log(
            `Hey ${this.arg1}, Can you help me with the ${this.arg2}. I kinnda lost in space.`
        );
        console.log(`The way to your ${param1} and ${param2}`);
    }
}

let pickYouUp = {
    arg1: "Mahi",
    arg2: "direction"
}

// me.obssesed("memory");
// terminal 
// me.obssesed.call(pickYouUp,"Heart");

Function.prototype.connect = function (leadObj, ...params) {
    console.log("points to called obj/fn", this)
    const expectedFn = this; // points to the object/fn which invokes this func
    leadObj.expectedFn = expectedFn;
    leadObj.expectedFn(...params);
    delete leadObj.expectedFn;
}

me.obssesed.connect(pickYouUp,...['heart','beyond']);

/*-------------------apply------------------- */

const destination = {
    word: "Out",
    necessity: function (para1) {
        console.log(`${this.word} of ${para1}`)
    }
}

const sof = {
    word: "Secret"
}

Function.prototype.percieve = function (objReqr, params) {
    const copyProp = this;
    objReqr.copyProp = copyProp;
    objReqr.copyProp(...params);
    delete objReqr.copyProp;
}