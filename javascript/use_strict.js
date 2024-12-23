"use strict"
var firstName = "Gal";
let amazon = {
    firstName : "Gaddot",
    sayHi: function(){
        console.log("53", this.firstName); //gaddot
        function subInnnner(){
            console.log("54",this.firstName); //undefined in strict mode
            const iAmInner = () => {
                console.log("55", this.firstName); //undefined in strict mode
            };
            iAmInner();
        }
        subInnnner();
    }
}

amazon.sayHi();

// ---- non-strict mode---------

var firstName = "Gal";
let amazonanion = {
    firstName : "Gaddot",
    sayHi: function(){
        console.log("53", this.firstName); //gaddot
        function subInnnner(){
            console.log("54",this.firstName); //gal
            const iAmInner = () => {
                console.log("55", this.firstName); //gal
            };
            iAmInner();
        }
        subInnnner();
    }
}

amazonanion.sayHi();