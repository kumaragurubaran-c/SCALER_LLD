const tr = document.querySelectorAll("tr");
const td = document.querySelectorAll("td");
const tb = document.querySelector("tbody");
const pieces = document.querySelector("select");
const rest = document.querySelector(".reset");
let piece = null;

pieces.addEventListener("change", (e) => {
    console.log(e.target.value);
    piece = e.target.value;
});

rest.addEventListener("click",()=>{
    console.log("reset done");
    window.location.reload();
})

for (let i = 0; i < tr.length; i++) {
    // console.log(tr[i].innerText);
    const cells = tr[i].querySelectorAll("td");
    for (let j = 0; j < tr.length; j++) {
        // console.log(cells[j].innerText);
        if ((i + j) % 2 == 0) {
            // console.log(cells[j].innerText);
            cells[j].style.background = "whitesmoke";
        } else {
            cells[j].style.background = "grey";
        }
    }
}
let removeStorage = null;

tb.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    const cell = e.target.innerText;
    const [ri, ci] = cell.split("-").map((idx) => parseInt(idx));
    // console.log([ri, ci]);
    if (removeStorage) {
        for (let i = 0; i < td.length; i++) {
            if (removeStorage[td[i].innerText] === true) {
                td[i].classList.remove("yellow");
            }
        }
    }
    const dataIndex = cell;
    const pathStorage = {};
    pathStorage[dataIndex] = true;
    if (piece == "king") {
        oneMove(ri, ci, pathStorage);
    }
    if (piece == "queen") {
        upperleft(ri, ci, pathStorage);
        upperright(ri, ci, pathStorage);
        downright(ri, ci, pathStorage);
        downleft(ri, ci, pathStorage);
        vertical(ri, ci, pathStorage);
        horizontal(ri, ci, pathStorage);
    }
    if (piece == "bishop") {
        upperleft(ri, ci, pathStorage);
        upperright(ri, ci, pathStorage);
        downright(ri, ci, pathStorage);
        downleft(ri, ci, pathStorage);
    }
    if (piece == "rook") {
        vertical(ri, ci, pathStorage);
        horizontal(ri, ci, pathStorage);
    }
    if (piece == "knight") {
        northWestL(ri, ci, pathStorage);
        northEastL(ri, ci, pathStorage);
        northEastL2(ri, ci, pathStorage);
        northWestL2(ri, ci, pathStorage);
        southEastL(ri, ci, pathStorage);
        southEastL2(ri, ci, pathStorage);
        southWestL(ri, ci, pathStorage);
        southWestL2(ri, ci, pathStorage);
    }
    if (piece == "pawn") {
        north(ri, ci, pathStorage);
    }
    if (Object.keys(pathStorage).length > 1) {
        for (let i = 0; i < td.length; i++) {
            console.log(td[i].innerText);
            console.log(Object.keys(pathStorage).length);

            if (pathStorage[td[i].innerText] === true) {
                td[i].classList.add("yellow");
            }
        }
    }
    removeStorage = pathStorage;
});

function upperleft(ri, ci, pathStorage) {
    ri--;
    ci--;
    while (ri >= 0 && ci >= 0) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri--;
        ci--;
    }
}
function upperright(ri, ci, pathStorage) {
    ri--;
    ci++;
    while (ri >= 0 && ci <= 7) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri--;
        ci++;
    }
}
function downright(ri, ci, pathStorage) {
    ri++;
    ci++;
    while (ri <= 7 && ci <= 7) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri++;
        ci++;
    }
}
function downleft(ri, ci, pathStorage) {
    ri++;
    ci--;
    while (ri >= 0 && ci >= 0) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri++;
        ci--;
    }
}

function vertical(ri, ci, pathStorage) {
    ri = 0;
    while (ri <= 7 && ci == ci) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri++;
    }
}

function horizontal(ri, ci, pathStorage) {
    ci = 0;
    while (ri == ri && ci <= 7) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ci++;
    }
}

function oneMove(ri, ci, pathStorage) {
    east(ri, ci, pathStorage);
    west(ri, ci, pathStorage);
    north(ri, ci, pathStorage);
    south(ri, ci, pathStorage);
    nortEast(ri, ci, pathStorage);
    northWest(ri, ci, pathStorage);
    southEast(ri, ci, pathStorage);
    southWest(ri, ci, pathStorage);
}

function east(ri, ci, pathStorage) {
    let flag = ci;
    ci--;
    while (ri == ri && flag >= ci) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ci++;
    }
}

function west(ri, ci, pathStorage) {
    let flag = ci + 1;
    while (ri == ri && ci <= flag) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ci++;
    }
}

function north(ri, ci, pathStorage) {
    let flag = ri;
    ri--;
    while (ri <= flag && ci == ci) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri++;
    }
}

function south(ri, ci, pathStorage) {
    let flag = ri + 1;
    while (ri <= flag && ci == ci) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri++;
    }
}

function southEast(ri, ci, pathStorage) {
    let row = ri + 1;
    let col = ci - 1;
    // ci--;
    while (ri <= row && ci >= col) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri++;
        ci--;
    }
}

function southWest(ri, ci, pathStorage) {
    let row = ri + 1;
    let col = ci + 1;
    while (ri <= row && ci <= col) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri++;
        ci++;
    }
}

function nortEast(ri, ci, pathStorage) {
    let row = ri;
    let col = ci;
    ri--;
    ci--;
    while (ri <= row && ci <= col) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri++;
        ci++;
    }
}

function northWest(ri, ci, pathStorage) {
    let row = ri - 1;
    let col = ci + 1;
    while (ri >= row && ci <= col) {
        const dataIndex = `${ri}-${ci}`;
        pathStorage[dataIndex] = true;
        ri--;
        ci++;
    }
}

function northWestL(ri, ci, pathStorage) {
    ri = ri - 2;
    ci = ci + 1;
    const dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri--;
    ci++;
}

function northEastL(ri, ci, pathStorage) {
    ri = ri - 2;
    ci = ci - 1;
    const dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri--;
    ci++;
}

function southEastL(ri, ci, pathStorage) {
    ri = ri + 2;
    ci = ci - 1;
    const dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri--;
    ci++;
}
function southWestL(ri, ci, pathStorage) {
    ri = ri + 2;
    ci = ci + 1;
    const dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri--;
    ci++;
}

function northEastL2(ri, ci, pathStorage) {
    ri = ri - 1;
    ci = ci - 2;
    const dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri--;
    ci++;
}
function northWestL2(ri, ci, pathStorage) {
    ri = ri + 1;
    ci = ci - 2;
    const dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri--;
    ci++;
}
function southEastL2(ri, ci, pathStorage) {
    ri = ri - 1;
    ci = ci + 2;
    const dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri--;
    ci++;
}
function southWestL2(ri, ci, pathStorage) {
    ri = ri + 1;
    ci = ci + 2;
    const dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri--;
    ci++;
}

