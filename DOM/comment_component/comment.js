function createInput() {
    const elem = document.createElement("div");
    elem.setAttribute("class", "input_btn_container");
    elem.innerHTML = `<input type="text" placeholder="write something" class = "input_box">
<button class="btn">Submit</button>`
    return elem;
}

function create_commentBox(text) {
    const elem = document.createElement("div");
    elem.setAttribute("class", "comment");
    elem.innerHTML = `<div class="comment">
                <div class="card">
                    <div class="text">${text}</div>
                    <div class="reply">Add Reply</div>
                </div>
            </div>`
            return elem;
}

const ele = document.querySelector(".comment_container");

ele.addEventListener("click", (e) => {
    const tar = e.target;
    if (tar.getAttribute("class") === "reply") {
        const ele = e.target.parentNode.parentNode;
        ele.appendChild(createInput());
    }

    if(tar.getAttribute("class")==="btn"){
        const ele = e.target.parentNode.parentNode.parentNode;
        console.log(e.target.parentNode.parentNode)
        const val = document.querySelector(".input_box").value;
        ele.appendChild(create_commentBox(val));
        // e.target.parentNode.remove();
    }
})