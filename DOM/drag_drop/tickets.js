const add_btn = document.querySelector(".add");
const delete_btn = document.querySelector(".delete");
const modal_container = document.querySelector(".modal-content");
const main_container = document.querySelector(".main_cont");
const ticket_priority = document.querySelector(".ticket-priority");
const filter_tasks = document.querySelector(".priorities-color");
const pending_cont = document.querySelector(".pending-cont");
const finished_cont = document.querySelector(".finished-cont");
const container = document.querySelectorAll(".container");

add_btn.addEventListener("click", (e) => {
    modal_container.style.display = "flex";
});
let moved_task = null;
let del_flag = true;
let id = new ShortUniqueId();
console.log(id);
let ticket_con;
let task_info = null;
let priority_color;
let ticketList = [];
let ticketObj = {};
let ticket_colors = [
    "fire",
    "land",
    "water",
    "earth"
]

window.addEventListener("load", () => {
    const list = JSON.parse(localStorage.getItem("todoTasks"));
    if (list) {
        for (let i = 0; i < list.length; i++) {
            let tickets = list[i];
            if (tickets.color && tickets.task && ticket_colors.includes(tickets.color))
                createTicket(tickets.task, tickets.id, tickets.color, tickets.isPending);
        }
    }
})

ticket_priority.addEventListener("click", (e) => {
    priority_color = e.target.classList[1];
    console.log(priority_color);
})

modal_container.addEventListener("keyup", (e) => {
    if (e.key !== "Enter") {
        return;
    }
    modal_container.style.display = "none";
    task_info = e.target.value;
    // let ticket_id = 12;
    let ticket_id = id.rnd();
    createTicket(task_info, ticket_id, priority_color);
});

function createTicket(task_info, ticket_id, priority_color, isPending = true) {
    ticket_con = document.createElement("div");
    ticket_con.setAttribute("class", "ticket-container");
    ticket_con.setAttribute("draggable", "true");
    ticket_con.innerHTML = `<div class="ticket-header ${priority_color}"></div>
            <div class="ticket-id">${ticket_id}</div>
            <div class="ticket-info">${task_info}</div>
            <div class="ticket-lock">
                <i class="fa-solid fa-lock" id="lock"></i>
            </div>`
    if (isPending) {
        pending_cont.appendChild(ticket_con);
    } else {
        finished_cont.appendChild(ticket_con)
    }

    ticketController(ticket_con, ticket_id);
    ticketObj = {
        color: priority_color,
        id: ticket_id,
        task: task_info,
        isPending: isPending
    }
    ticketList.push(ticketObj);
    updateLocalStorage();
}

function ticketController(ticket_con) {
    const lockedEle = ticket_con.querySelector(".ticket-info");
    ticket_con.addEventListener("click", (e) => {
        if (!del_flag) {
            ticket_con.remove();

        } else if (e.target.classList.contains("fa-lock")) {
            e.target.classList.remove("fa-lock");
            e.target.classList.add("fa-lock-open");
            lockedEle.setAttribute("contenteditable", "true");
            const ticketObj = ticketList.find((ticket) => {
                return ticket.id === id;
            });
        } else if (e.target.classList.contains("fa-lock-open")) {
            e.target.classList.remove("fa-lock-open");
            lockedEle.setAttribute("contenteditable", "false");
            e.target.classList.add("fa-lock");
        }
    });
    updateLocalStorage();
}

container.forEach((contain) => {
    contain.addEventListener("dragstart", (e) => {
        if (e.target.classList.contains("ticket-container"))
            moved_task = e.target;
        // finished_cont.appendChild(moved_task);
    });
    contain.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    contain.addEventListener("drop", (e) => {
        e.preventDefault();
        if (moved_task) {
            contain.appendChild(moved_task);
            const isPendingContainer = contain.classList[0] === "pending-cont" ? true : false;
            const idx = moved_task.querySelector(".ticket-id").innerText;
            ticketObj = ticketList.find((ticket) => {
                return ticket.id === idx;
            });
            ticketObj.isPending = isPendingContainer;
        }
        updateLocalStorage();
    });
})

delete_btn.addEventListener("click", (e) => {
    if (del_flag) {
        e.target.style.color = "red";
        del_flag = false;

    } else {
        e.target.style.color = "black";
        del_flag = true;
    }
})


function updateLocalStorage() {
    console.log(ticketList);
    localStorage.setItem("todoTasks", JSON.stringify(ticketList));
}

JSON.parse(localStorage.getItem("todoTasks"))