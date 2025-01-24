

//If you use curly braces {} inside a .then() callback, you must explicitly use the return keyword to pass a value or a promise to the next .then().
Promise.resolve(1)
    .then(() => {
        Promise.resolve(2);
    })
    .then((val) => val * 3)
    .then((value) => {
        console.log(value * 3);
    })
    .then(Promise.resolve(4));

    // Without Curly Braces (Implicit Return)
    Promise.resolve(1)
    .then(() => Promise.resolve(3))  // ✅ Returns a resolved promise with 3
    .then((value) => {
        console.log(value * 3);  // ✅ Still logs 9
    });