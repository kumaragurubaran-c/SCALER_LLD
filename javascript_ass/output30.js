let users = [{
    name: "Rajneesh",
    age: 34,
    address: {
        local: "22 Alaknanda",
        city: "Dehradun",
        state: "UK",
    },
    orders: [{
        id: 1,
        name: "GOT Book Series"
    }],
},
{
    name: "Bhavesh",
    age: 37,
    address: {
        local: "48 DT Row",
        city: "Hyderabad",
        state: "AP",
    },
},
{
    name: "Jasbir",
    age: 38,
    address: {
        local: "196 Lama Bhavan",
        city: "Gangtok",
        state: "Sikkim",
    },
    orders: [{
        id: 1,
        name: "Chair"
    },
    {
        id: 2,
        name: "PS5"
    },
    ],
},
];


function addUsersData(users, userObject, item) {
    const existingUser = users.find(user =>
        user.name === userObject.name &&
        user.age === userObject.age &&
        JSON.stringify(user.address) === JSON.stringify(userObject.address)
    );

    if (existingUser) {
        if (!existingUser.orders) {
            existingUser.orders = [];
        }
        existingUser.orders.push({
            id: existingUser.orders.length + 1,
            name: item
        })
    } else {
        let newUser = { ...userObject, orders: [{ id: 1, name: item }] };
        users.push(newUser);
    }
    console.log(JSON.stringify(users,null,2));
}

addUsersData(users,
    {
        name: "Ravi",
        age: 24,
        address: {
            local: "25 Iroda",
            city: "Dehradun",
            state: "UK",
        },
    },
    "lap")
