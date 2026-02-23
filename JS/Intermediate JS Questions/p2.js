// Problem 2: Event Loop, Microtasks & Macrotasks
// Objective: Understand JavaScript execution order using the call stack, microtask queue, and macrotask queue.
// Question:Predict the execution order of the following code and explain why.

console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
  .then(() => console.log("promise 1"))
  .then(() => console.log("promise 2"));

console.log("end");

// Pridicted: start end promise 1 promise 2 timeout
//Actual: start end promise 1 promise 2 timeout

//Reason:
// priority is execution stack -> microtask queue -> macrotask queue
// flow:
// start prints
// settimeout callback goes to macrotask queue
// promise resolves and .then goes to microtask queue
// end prints 
// all microtask get executed one by one (promise 1 and promise 2 prints)
// then macrotask gets executed (timeout prints)