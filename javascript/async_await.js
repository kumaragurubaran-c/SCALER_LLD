//  cafe => getMeu => put order => served => generate bill => payment => exit

function getMenu(time) {
    console.log("I have entered the restaurant");
    const aloha = time >= 6 && time <= 10 ? true : false;
    const menu = new Promise((resolve, reject) => {
        if (aloha) {
            resolve("menu is shared or given")
        } else {
            reject("Sorry, the restaurant is closed for the day");
        }
    });
    return menu;
}

function placeOrder(item1, item2) {
    const arr = ["Tea", "Coffee", "MilkShake", "Biscuits"];
    const orders = new Promise((resolve, reject) => {
        if (arr.includes(item1) && arr.includes(item2)) {
            resolve(`Your order ${item1} and ${item2} has been placed`);
        } else {
            reject(`The ordered item is not currently available`)
        }
    })
    return orders;
}

function served() {
    const itemsServed = new Promise((resolved) => {
        setTimeout(() => {
            resolved("Here's your order dear, Enjoy the meal")
        }, 5000)
    });
    return itemsServed;
}

function generateBill() {
    const bill = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Pay the bill of 500 rupees");
        }, 1500);
    });
    return bill;
}

async function cafe() {
    try {
        const menu = await getMenu(7);
        const orders = await placeOrder("MilkShake", "Biscuits");
        const servedHot = await served();
        const bill = await generateBill();
        console.log(menu);
        console.log(orders);
        console.log(servedHot);
        console.log(bill);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Thanks for visiting, comeback again")
    }
}

cafe();
