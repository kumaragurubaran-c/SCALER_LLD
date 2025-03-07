const add_btn = document.querySelector(".add");
const delete_btn = document.querySelector(".delete");
const modal_container = document.querySelector(".modal-content");
const main_container = document.querySelector(".main-content");
const ticket_priority = document.querySelector(".ticket-priority");
const filter_tasks = document.querySelector(".priorities-color");

add_btn.addEventListener("click", (e) => {
    modal_container.style.display = "flex";
});

let del_flag = true;
// let id = new ShortUniqueId();
let ticket_con;
let task_info = null;
let priority_color;
let ticketList = [];
let ticketObj = {};
let ticket_colors = [
    "midnightBlue",
    "chocolate",
    "lightSlateGray",
    "paleVioletRed"
]
modal_container.addEventListener("keyup", (e) => {
    if (e.key !== "Enter") {
        return;
    }
    modal_container.style.display = "none";
    task_info = e.target.value;
    let ticket_id = 12;
    // let ticket_id = id.rnd();
    createTicket(task_info, ticket_id, priority_color);
});


window.addEventListener("load", () => {
    const list = JSON.parse(localStorage.getItem("todoTasks"));
    if (list) {
        for (let i = 0; i < list.length; i++) {
            let tickets = list[i];
            if (tickets.color && tickets.task && ticket_colors.includes(tickets.color))
                createTicket(tickets.task, tickets.id, tickets.color);
        }
    }
})


ticket_priority.addEventListener("click", (e) => {
    priority_color = e.target.classList[1];
    console.log(priority_color);
})

function createTicket(task_info, ticket_id, priority_color) {
    ticket_con = document.createElement("div");
    ticket_con.setAttribute("class", "ticket-container");
    ticket_con.innerHTML = `<div class="ticket-header ${priority_color}"></div>
            <div class="ticket-id">${ticket_id}</div>
            <div class="ticket-info">${task_info}</div>
            <div class="ticket-lock">
                <i class="fa-solid fa-lock" id="lock"></i>
            </div>`
    main_container.appendChild(ticket_con);
    ticketController(ticket_con);
    ticketObj = {
        color: priority_color,
        id: ticket_id,
        task: task_info
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
            const ticketObj = allTickets.find((ticket) => {
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

// filter_tasks.addEventListener("click", (e) => {
//     const ticket_filter = e.target.classList[1];
//     const ticket_containers = document.querySelectorAll(".ticket-container");
//     for (let i = 0; i < ticket_containers.length; i++) {
//         const ticket_header = ticket_containers[i].querySelector(".ticket-header");
//         const ticket_color = ticket_header.classList[1];
//         if (ticket_color !== ticket_filter) {
//             ticket_containers[i].style.display = "none";
//         } else {
//             ticket_containers[i].style.display = "block";
//         }
//     }
// })

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