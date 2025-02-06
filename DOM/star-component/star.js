const container = document.querySelector(".star_container");
const starred = document.querySelectorAll(".star");
const tot = document.querySelector("span");
let star_ids;
let selectedStar = 0;
container.addEventListener("click", (e) => {
    this.star_ids = e.target.getAttribute("id");
    if(!this.star_ids){
        return;
    }
    if (selectedStar == 1 && this.star_ids == 1) {
        selectedStar = 0;
    } else {
        selectedStar = this.star_ids;
    }
    tot.innerText = `${selectedStar}/5`;

    rateFunc(selectedStar);
});

container.addEventListener("mouseover", (e) => {
    const star_ids = e.target.getAttribute("id");
    hoverFunc(star_ids);
});

container.addEventListener("mouseleave", (e) => {
    const star_ids = e.target.getAttribute("id");
    hoverFunc(star_ids);
    if (selectedStar) {
        rateFunc(selectedStar);
    }
})

function rateFunc(selectedStar) {
    for (let i = 0; i < starred.length; i++) {
        starred[i].classList.remove("yellow");
    }
    for (let i = 0; i < selectedStar; i++) {
        starred[i].classList.add("yellow");
    }
}

function hoverFunc(selectedStar) {
    for (let i = 0; i < starred.length; i++) {
        starred[i].classList.remove("yellow");
    }
    for (let i = 0; i < selectedStar; i++) {
        starred[i].classList.add("yellow");
    }
}