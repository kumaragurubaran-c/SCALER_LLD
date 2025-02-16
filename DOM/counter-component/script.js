// const curr_number = document.querySelector("#number");
// const inputNumber = document.querySelector("#increment");
// const reset = document.querySelector("#reset");

// const add_btn = document.querySelector("#add");
// const sub_btn = document.querySelector("#subtract");
// add_btn.addEventListener("click", () => {
//     let curr = Number(curr_number.innerText);
//     const value = Number(inputNumber.value);
//     curr_number.innerText = curr + value;
// });

// sub_btn.addEventListener("click", () => {
//     let curr = Number(curr_number.innerText);
//     const value = Number(inputNumber.value);
//     curr_number.innerText = curr - value;
// });

// reset.addEventListener("click", (e) => {
//     curr_number.innerText = 0;
// })

const inputNumber = document.querySelector("#increment");
const value = inputNumber.value;
const curr_number = document.querySelector("#number");
const add_btn = document.querySelector("#add");
const sub_btn = document.querySelector("#subtract");
const reset = document.querySelector("#reset");
add_btn.addEventListener("click", () => {
    let curr = Number(curr_number.innerText);
    let ipNumber = Number(inputNumber.value);
    curr_number.innerText = curr + ipNumber;
});

sub_btn.addEventListener("click", () => {
    let curr = Number(curr_number.innerText);
    let ipNumber = Number(inputNumber.value);
    curr_number.innerText = curr - ipNumber;
});

reset.addEventListener("click", () => {
    curr_number.innerText = 0;
});