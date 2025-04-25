const board = document.querySelector(".board");
const row = document.querySelectorAll(".row");
const cb = document.querySelectorAll(".checkbox");

document.querySelector('.board').addEventListener('click', (e) => {
    Array.from(document.querySelectorAll('.checkbox')).map(el => {
        if (el.style.backgroundColor == 'red') {
            el.style.backgroundColor = el.getAttribute('default-bg');
        }
        else {
            el.setAttribute('default-bg', el.style.backgroundColor);
        }
    });
    const currentBox = e.target
    const currentRow = currentBox.parentNode;
    let prevRow = currentBox.parentNode.previousSiblingElement;
    //currentBox.style="background-color:red";
    let i = currentBox.id, row = currentRow;
    //paint top-right
    while (row && i > 0) {
        let child;
        if (i % 8 != 0) {
            child = (i % 8) - 1;
        } else {
            child = 7;
            i = 7
        };
        row.children[child].style.backgroundColor = "red";
        row = row.previousElementSibling;
        i = i - 7;
    }
    //paint top-left
    i = currentBox.id, row = currentRow.previousElementSibling;;
    while (row && i > 0) {
        let child;
        if (i % 8 != 0) {
            if ((i % 8) - 2 >= 0) {
                child = (i % 8) - 2;
            }
            else break;
        } else {
            child = 6;
        };
        row.children[child].style.backgroundColor = "red";
        row = row.previousElementSibling;
        i = i - 9;
    }
    i = parseInt(currentBox.id), row = currentRow.nextElementSibling;
    //paint buttom-right
    while (row && i < 64) {
        let child;
        if (i % 8 != 0) {
            child = (i % 8);
        } else {
            child = 8;
            break;
        };
        row.children[child].style.backgroundColor = "red";
        row = row.nextElementSibling;
        i = i + 9;
    }
    //paint buttom-left
    i = parseInt(currentBox.id), row = currentRow.nextElementSibling;
    while (row && i < 64) {
        let child;
        if (i % 8 != 0) {
            if ((i % 8) - 2 >= 0) {
                child = (i % 8) - 2;
            }
            else break;
        } else {
            child = 6;
        };
        row.children[child].style.backgroundColor = "red";
        row = row.nextElementSibling;
        i = i + 7;
    }
})
