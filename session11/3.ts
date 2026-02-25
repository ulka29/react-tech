// Assignment 3
// Create a function updateField that takes:
// object
// key
// value
// Ensure the value type matches the key type.
// Try assigning wrong type and observe the error.

function updateField<T,K extends keyof T>(obj:T,keys:K,values:T[K]):void{
    obj[keys]=values;
    console.log(obj);
}
type User = {
    id:number,
    name:string,
}
let user :User= {
    id:2,
    name:"Ulka"
}
updateField(user,"name","Ulka Patel")


// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// updateField(user,"name",123)