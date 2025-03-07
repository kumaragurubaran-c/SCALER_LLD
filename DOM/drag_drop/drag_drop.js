const drag = document.querySelectorAll(".container");
let dragElement = null;
drag.forEach((drag) => {
    drag.addEventListener("dragstart", (e) => {
        dragElement = e.target;
        // console.log("DragEvent", e)
    });
    drag.addEventListener("dragover", (e) => {
        e.preventDefault();
        // console.log("DragOver", e);
    });
    drag.addEventListener("drop", (e) => {
        // console.log("Drop", e);
        if(dragElement){
            drag.appendChild(dragElement);
        }
    });
    drag.addEventListener("dragend", (e) => {
        // console.log("DragEnd", e);
    });
})