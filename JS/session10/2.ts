// Assignment 2: any vs unknown
// 1. Create a function that accepts any and performs operations without checks
function addAny(a:any,b:any){
    return a+b;
}





// 2. Create the same function using unknown and add proper type guards
function addUnknown(a:unknown,b:unknown){
    if(typeof a ==="number" && typeof b==="number" ){
        return a+b
    }
    
}





// 3. Compare the compiler behavior and runtime safety

// any: Turn OFF type checking, TypeScript stops helping you completely.
let userInput: any = 10;
userInput.toUpperCase(); //can Runtime crash in JS if type mismatch

// unknown: We don't know the type yet → must check first, TypeScript forces safety.
// Assigning TO unknown is allowed
// Using FROM unknown is restricted

let value: unknown = 10;
value.toUpperCase(); //Error in TS

// Correct way (type narrowing)
// That syntax is called type narrowing (type guarding) and it’s how you safely use unknown.
if (typeof value === "string") {
  value.toUpperCase(); //safe
}


// Type Guard / Type Narrowing
// 1️.typeof
typeof value === "string"
// 2️. instanceof
if (value instanceof Date) {
  value.getFullYear();
}
// 3️. in operator
if ("name" in obj) {
    console.log(obj.name);
}





// 4. Create one variable using any
// 5. Create another variable using unknown
let x:any = "abc" ;
let y:unknown = "abc";






// 6. Try calling methods directly on both
x.toUpperCase()  //runs soomthly in TS
y.toUpperCase()  //gives error in TS





// 7. Which one forces you to write safer code?

    // Unknown is safer as
    // any can run smoothly but can cause erro in runtime if it gets wrong type
    // on the other hand unknown type narrows first then runs the method so it is runtime safer