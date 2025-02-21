const add_ticket = document.querySelector(".add-btn");
const remove_ticket = document.querySelector(".remove");
const modal_con = document.querySelector(".modal_content");
const txt_area = document.querySelector(".text-area-cont");
const priority = document.querySelector(".priority-color-cont");
const priorityList = document.querySelectorAll(".priority-color");
const mainContainer = document.querySelector(".main_content");
const pallete = document.querySelector(".palletes");
let content;
let color = "green";
let flag = true;
const allTickets = [];
let ticket_color = ["green", "blue", "red", "yellow"];
let id = new ShortUniqueId();
let tckt_id;

add_ticket.addEventListener("click", (e) => {
    modal_con.style.display = "flex";
});


window.addEventListener("load", () => {
    const getAlltickets = JSON.parse(localStorage.getItem("todoTasks"));
    for (let i = 0; i < getAlltickets.length; i++) {
        let ticketObj = getAlltickets[i];
        if(ticketObj.color && ticketObj.content && ticket_color.includes(ticketObj.color))
        createTicket(ticketObj.content, ticketObj.color, ticketObj.id)
    }
})

pallete.addEventListener("click", (e) => {
    // const filter = e.target.classList;
    // console.log(filter);
    if (e.currentTarget === e.target) {
        return;
    }
    color = e.target.classList[1];
    const ticketList = document.querySelectorAll(".ticket-container");
    for (let i = 0; i < ticketList.length; i++) {
        const ticketEle = ticketList[i].querySelector(".ticket-header");
        const ticketColor = ticketEle.classList[1];
        if (ticketColor !== color) {
            ticketList[i].style.display = "none";
        } else {
            ticketList[i].style.display = "block";
        }
    }
});

pallete.addEventListener("dblclick", (e) => {
    if (e.currentTarget === e.target) {
        return;
    }
    const ticketList = document.querySelectorAll(".ticket-container");
    for (let i = 0; i < ticketList.length; i++) {
        ticketList[i].style.display = "block";
    }
})

function createTicket(content, color, tckt_id) {
    tckt_id = tckt_id || id.rnd();
    const ticket_container = document.createElement("div");
    ticket_container.setAttribute("class", "ticket-container");
    ticket_container.innerHTML = `<div class="ticket-header ${color}"></div>
    <div class="ticket-id">${tckt_id}</div>
    <div class="ticket-area">${content}</div>
    <div class="lock-unlock">
        <i class="fa-solid fa-lock"></i>
    </div>`
    mainContainer.appendChild(ticket_container);
    ticketController(ticket_container, tckt_id);
    const ticketObj = {
        id: tckt_id,
        content: content,
        color: color
    }
    allTickets.push(ticketObj);
    updateLocalStorage();
}

txt_area.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        content = e.target.value;
        createTicket(content, color);
        modal_con.style.display = "none";
    }
})

function ticketController(ticket_container, id) {
    const editable = ticket_container.querySelector(".ticket-area");
    ticket_container.addEventListener("click", (ele) => {
        if (!flag) {
            ticket_container.remove();
        }
        else if (ele.target.classList.contains("fa-lock")) {
            editable.setAttribute("contenteditable", "true");
            const lock = ele.target;
            lock.classList.remove("fa-lock");
            lock.classList.add("fa-lock-open");
        } else if (ele.target.classList.contains("fa-lock-open")) {
            const lock = ele.target;
            editable.setAttribute("contenteditable", "false");
            lock.classList.remove("fa-lock-open");
            lock.classList.add("fa-lock");
            const ticketObj = allTickets.find((ticket) => {
                return ticket.id === id;
            });
            ticketObj.content = editable.innerText;
        } else if (ele.target.classList.contains("ticket-header")) {
            const ticket_status = ele.target.classList[1];
            let idx = ticket_color.indexOf(ticket_status);
            let nextIdx = (idx + 1) % ticket_color.length;
            ele.target.classList.remove(ticket_status);
            ele.target.classList.add(ticket_color[nextIdx]);
            const ticketObj = allTickets.find((ticket) => {
                return ticket.id === id;
            });
            ticketObj.color = ticket_color[nextIdx];
            console.log(ticketObj);
        }
        updateLocalStorage();
    })
}

remove_ticket.addEventListener("click", (e) => {
    if (flag) {
        flag = false;
        e.target.style.color = 'red';
    } else {
        flag = true;
        e.target.style.color = 'black';
    }
});

priority.addEventListener("click", (e) => {
    if (e.currentTarget === e.target) {
        return;
    }
    const cl = e.target.classList;
    color = cl[1];
    for (let i = 0; i < priorityList.length; i++) {
        priorityList[i].classList.remove("active");
    }
    e.target.classList.add("active")
})

function updateLocalStorage() {
    localStorage.setItem("todoTasks", JSON.stringify(allTickets))
}