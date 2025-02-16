// const inputListener = document.querySelector(".otp");

// inputListener.addEventListener("keyup", (e) => {
//     if (e.key === "Backspace" || e.key === "Delete") {
//         e.target.previousElementSibling.focus();
//     } else if (e.target.value !== "" && !isNaN(Number(e.target.value))) {
//         e.target.nextElementSibling.focus();
//     }
// })

const inputs = document.querySelector(".otp");

inputs.addEventListener("keyup", (e) => {

    if (e.key === "Backspace" || e.key === "Delete") {
        e.target?.previousElementSibling?.focus();
    } else if (e.target.value !== "" && !isNaN(Number(e.target.value))) {
        e.target?.nextElementSibling?.focus();
    }

})