// Assignment 1
// 1. Create a generic function called wrapInArray that accepts any value and returns it inside an
// array.

function wrapInArray<T>(val:T):T[]{

    return [val];
}
console.log(wrapInArray(2))
console.log(wrapInArray("Ulka"))




// 2. Create a generic interface PaginatedResponse<T> with properties:
// items: T[]
// total: number

interface User {
id: number
name: string
email: string
role: "ADMIN" | "CUSTOMER"
isActive: boolean
}

interface PaginatedResponse<T>{
    items:T[];
    total:number;
}

const responses: PaginatedResponse<User>= {
    items:[
        {id:1,name:"ulka",email:"ahsd",role:"ADMIN",isActive:true}
    ],
    total:1
}











