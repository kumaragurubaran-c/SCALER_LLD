// console.log("this keyword", this) // window

// function thisFn() {
//     console.log("this function", this); // window
// }

// thisFn();

// const Maang = {
//     m: "microsoft",
//     a () {
//         console.log("a  is for amazon", this); // object
//     }
// }

// Maang.a();

// const Faang = {
//     f: "facebook",
//     a: {
//         n: () => {
//             console.log("n is for netflix", this);  // window
//         }
//     }
// }

// Faang.a.n();

// const names = {
//     fn: "arun",
//     prints: function () {
//         console.log("direct function call", this) //object
//         function f() {
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

const name = {
    fn: "arun",
    prints: function () {
        console.log("f print", this); //object
        fn = () => {
                console.log("fn print", this); // object
         }
         fn();
        function fns() {
                console.log("fns this", this); //window
                fn = () => {
                    console.log("inner arrow fn", this); // window
                }
                fn();
         }
            fns();
            console.log("direct function call", this) //object
    }
}

name.prints();

// function callFlatArrow() {
//     console.log("callFlatArrow directly", this);// window
//     jewels = () => {
//         console.log("callFlatArrow", this); // window
//     }
//     jewels();
    
// }

// callFlatArrow();

