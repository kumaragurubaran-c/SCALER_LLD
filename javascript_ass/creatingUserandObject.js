function updateUsers(users, userObject, item) {
    // Find the user in the users array by matching the name property
    let user = users.find((user) => user.name === userObject.name);
    
    // If the user does not exist, create a new user object and add it to the users array
    if (!user) {
        user = {
            ...userObject
        };
        users.push(user);
    }

    // If the user does not have an orders property, initialize it with the first order
    if (!user.orders) {
        user.orders = [{
            id: 1,
            name: item
        }];
    } else {
        // If the user already has orders, add a new order to the orders array
        user.orders.push({
            id: user.orders.length + 1, // Increment the order id based on the length of the orders array
            name: item,
        });
    }

    // Return the updated users array
    return users;
}

