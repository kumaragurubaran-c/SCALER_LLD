// object literals
const objLiterals = {
    life: "kid",
    lifestyle: "happy"
}
console.log("objLiterals", objLiterals);

// constructor object
const constructObj = new Object();
constructObj.life = "school";
constructObj.lifestyle = "sad";
console.log("constructObj", constructObj);

// costructor function
function constFunction(life, lifeStyle) {
    this.life = life;
    this.lifeStyle = lifeStyle;
}

const constFun = new constFunction("Hi-School", "sadder");
console.log("constFun", constFun);

//ES-6 Classes
class ecmaScript {
    constructor(life, lifestyle) {
        this.life = life;
        this.lifestyle = lifestyle;
    }
}

const ecScript = new ecmaScript("college", "worst");
console.log("ecScript", ecScript);

//object.create
const objectCreate = {
    life: "Job",
    lifestyle: "Enna da intha vaalkai"
}
const objCreate = Object.create(objectCreate);
console.log("objCreate", objCreate); // empty, its stored in object prototype
objCreate.life = "Job";
objCreate.lifestyle = "Enna da intha vaalkai";
console.log("objCreate", objCreate);
