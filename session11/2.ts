// Assignment 2
// Create a function activateUser that accepts only objects having isActive: boolean .
// Try passing invalid objects and observe TypeScript errors.

function activateUser<T extends {isActive: boolean}>(arg:T):T{
    return arg;
}

const res1 = activateUser({isActive:true,name:"ulka"})

console.log(res1)
//cant use as isActive not available
// activateUser({name:"ulka"})




// Create another function that requires both id and email .
function findUser<T extends {id:number , email:string}>(arg:T):T{
    return arg
}

const res2 = findUser({id:3,name:"ulka",email:"adfs"})
console.log(res2)

//works
findUser({name:"ulka",email:"adfs",id:3})

//cant use as id not available
// findUser({name:"ulka",email:"adfs"})