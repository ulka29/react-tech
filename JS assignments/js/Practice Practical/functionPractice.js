//function declaration or statment
add(3,4) // fully hoisted

function add(a=4,b=6){
    return a+b;
}

//here 3,4 are argument
// a,b are promises
//4,6 are default values

//function expresion and named function behaves as variable
var multi = function mul(a,b){
    return a*b;
}
//anonymus function
var fact= function (){
    console.log("");
}





//callback function
//A callback is a function passed to another function and called by that other function.

// Recursion
// Recursion is when a function calls itself.

function greet(name) {
    console.log("Hello " + name);
}
function processUser(callback) {
    callback("Ulka");   // calling the passed function
}
processUser(greet);  //greet is a callback  •	processUser decides when to call it
	


//Correct definition (precise)
//A callback is a function passed into another function to be called by that function, either immediately or later
[1, 2, 3].map(x => x * 2);   // callback called immediately
setTimeout(() => {}, 1000); // callback called later



//Not a callback
//❌ 1. Function passed but never called
function store(fn) {
  return fn;
}
store(() => console.log("Hi"));



// What “callback” means internally
// A callback is a function stored by another system (JS engine / Web API / Promise) and invoked later by that system.



//1️⃣ map() — synchronous callback (JS engine)
Code
[1, 2, 3].map(x => x * 2);
//Internally (conceptual algorithm)
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const mappedValue = callback(array[i],i,array);
    result.push(mappedValue);
  }
  return result;
}



//2️⃣ setTimeout() — asynchronous callback (Web API + Event Loop)
Code
setTimeout(() => {
  console.log("Hello");
}, 1000);

// Internally (browser)
//1. JS engine calls setTimeout
//2. Browser Web API receives:
    //callback function
    // delay
//3. Browser stores the callback
//4. Timer runs outside JS
//5.After delay:
    //Callback is placed in Macrotask Queue
//6. Event loop pushes it to Call Stack
//7. Callback executes



// 3️⃣ Promise.then() — asynchronous callback (Microtask Queue)
// Why it is a callback
// You give a function to Promise
// Promise decides when to call it
// Runs asynchronously
promise.then(data => console.log(data));



//first-class citizens
// In JavaScript, functions are first-class citizens.
// That means a function can be:
// •	Stored in a variable
// •	Passed as an argument
// •	Returned from another function
function greet(){
    return "hello";
}
let x=greet();
let y=function (){
    console.log("hi");
}
function run(fn){
    fn();
}
run(y);



//Arrow Function
// 🔹 WHY arrows are best for callbacks (1-line)
// Callbacks usually don’t need their own this, and arrow functions don’t create one.
const addition = (a,b)=>{
    return a+b;
}



// Higher-Order Function (HOF)

// A Higher-Order Function is a function that does at least one of the following:
// Takes another function as an argument, or
// Returns a function.
// Functions in JavaScript are first-class citizens, so they can be passed around like values.

const radius=[3,4,5,6];
const area = function (radius){
    return Math.PI* radius*radius;
};
const calculate = function (radius, logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
};
console.log(calculate(radius,area))



//map, filter and reduce are higher order function
//map = transform an array
//filter=filter values
//reduce= from all element of array find a single value
console.log(radius.map(area));
const arr=[1,2,3,4];

function double(x){
    return x*2;
}
console.log(arr.map(double));

function isEven(x){
    return x%2===0;
}
console.log(arr.filter(isEven));

function sum(accumlater,current){
    accumlater=accumlater+current;
    return accumlater;
}
function max(accumlater,current){
    if(current>accumlater){
        accumlater=current;
    }
    return accumlater
}
console.log(arr.reduce(sum,0));
console.log(arr.reduce(max,0));



//When a function is assosiated with a object then it is a method
str.toUpperCase();



//forEach Method
// loops in Array
// arr.forEach(callbackFunction)
[1,2,3].forEach((val)=>{
    console.log(val);
})
['a','b','c'].forEach((val,index,arr)=>{
    console.log(val," ",index," ",arr);
})







