// const actress_details = {
//     name: "kristen stewart",
//     occupation: "acting",
//     single: true,
//     address: {
//         city: "los angeles, califoria",
//         state: "US"
//     },
//     movies: ["The Twilight saga", "Snow-white and Huntsman", "Zathura", "Charlie's Angels", "Adventureland"],
//     awards: function () {
//         console.log("British Academy Film Award and a César Award,", this);// object
//         const fn = () => {
//             console.log("function call",this); //window
//         }
//         fn();
//     }
// }

// actress_details.awards();
// console.log("global call",this);

// function fn(){
//     console.log("function call",this); //window
// }

// fn();

// const homes = {
//     address:"720 c",
//     city: "Chennai"
// }

// function home(){
//     console.log(homes);
//     console.log("home object", this);//window
// }
// home();

// const arrowfn = () => {
//     console.log("arrow function" , this);
// }

// const arrowfun = function(){
//     console.log("normal function" , this);
// }

// arrowfun();

// arrowfn();

// console.log(actress_details);
// console.log(actress_details.name);
// console.log(actress_details.address);
// console.log(actress_details.movies);
// console.log(actress_details[movies]); // not defined
// console.log(actress_details["movies"]);

// for(let key in actress_details){
//     console.log([key])
// }
// console.log("--------------")
// for(let key in actress_details){
//     console.log(key)
// }
// console.log("--------------")
// for(let key in actress_details){
//     console.log(actress_details[key])
// }

// this from arrow fn
// if this keyword is invoked through arrow function it will take object reference
// var first_name = "Bruce";
// let batman = {
//     first_name : "Will",
//     outerfn : function (){
//         console.log("outerfn",this.first_name);
//         innerfn = () => {
//             console.log("innerfn",this.first_name);
//             innerMostfn = () => {
//                 console.log("innerMostfn",this.first_name);
//             }
//             innerMostfn();
//         }
//         innerfn();
//     }
// }

// // batman.outerfn();

// // if this keyword is invoked through normal function it will take global reference
// var first_name = "Bruce";
// let batman = {
//     first_name: "Will",
//     outerfn: function () {
//         console.log("outerfn", this.first_name);
//         function innerfn() {
//             console.log("innerfn", this.first_name); // gloal
//             function innerMostfn() {
//                 console.log("innerMostfn", this.first_name); //global
//             }
//             innerMostfn();
//         }
//         innerfn();
//     }
// }

// batman.outerfn();


// const f = () => {
//     console.log("f print", this);
//     fn = () => {
//         console.log("fn print", this);
//     }
//     fn();
// }

// f();

// const names = {
//     fn: "arun",
//     prints: function () {
//         function f () {
//             console.log("f print", this); //window
//             fn = () => {
//                 console.log("fn print", this); // window
//             }
//             fn();
//         }
//         f();
//     }
// }

// names.prints();

// const names = {
//     fn: "arun",
//     prints: function () {
//         const f = () => {
//             console.log("f print", this);
//             fn = () => {
//                 console.log("fn print", this);
//             }
//             fn();
//         }
//         f();
//     }
// }

// names.prints();

var fnExpression = function(){
    return "fnExpression";
}

console.log(fnExpression());

function normalFn(){
    console.log("normalFn")
}

normalFn();


