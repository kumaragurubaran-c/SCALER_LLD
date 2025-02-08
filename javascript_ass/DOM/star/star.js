// WRITE SOLUTION HERE
const container = document.querySelector(".star-container");
const star = document.querySelectorAll(".star");

container.addEventListener("click", (e) => {
    let loop = e.target.getAttribute("data-index");
    for (let i = 0; i < star.length; i++) {
        star[i].classList.remove("star-filled");
    }
    for (let i = 0; i < loop; i++) {
        star[i].classList.add ("star-filled");
    }
})