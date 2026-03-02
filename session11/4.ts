// Assignment 4
// Create a constant adminUser .
// Create a type from it using typeof .
// Add a new property and observe how the type changes automatically.


//Before adding property
const adminUser={
    id:1,
    name:"Ulka",
    role: "ADMIN",
    permission:"Read-Write"
}

type Admin = typeof adminUser;

const anotherUser:Admin = {
    id:2,
    name:"AKansha",
    role:"Admin",
    permission:"",
}

// IF we add property in adminUser then Admin type will automatically change and we will have to add that property in anotherUser
