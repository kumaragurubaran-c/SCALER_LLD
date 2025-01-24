const fs = require("fs");
console.log("first console");
// synchrounous approach
/*const buffers = fs.readFileSync("./file1.txt")
console.log(buffers.toString());*/

/*---------------------------------------------- */

//Asynchrounous approach
fs.readFile("./file1.txt", function (err, data) {
    if (err) {
        console.log("error", err);
        return;
    }
    console.log(data.toString());
});
console.log("last console");

//Asynchrounous approach fail flow
fs.readFile("./noFile.txt", function (err, data) {
    if (err) {
        console.log("error", err);
        return;
    }
    console.log(data.toString());
});
console.log("last console");
