// Assignment 1: Type Inference
//step:1  Declare variables using let and const with initial values and observe inferred types

let a = 10
const b = 20
//infered type will be nymber

// step 2: Try reassigning incompatible values and note the compiler errors

a="xyza"
// b="123"
//converter to string type but it was infered as number so error
//as JS runs in the end but const cant be reassigned so it gives error

// step:3 Write a function without a return type and inspect what TypeScript infers
function add(a:number, b:number){
    return a+b;
}
console.log(add(a,b))

//return type automatically becomes number
