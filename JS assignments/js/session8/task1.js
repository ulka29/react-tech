// Task 1: Predict Output of Async Code
// Objective: Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.

/*
   Requirements
1. Predict the output order for each code block
2. Run the code and compare with your prediction
3. Explain the execution order based on the event loop
*/

// Code Block 1: Basic Async
console.log("1");

setTimeout(function() {
    console.log("2");
}, 0);

Promise.resolve().then(function() {
 console.log("3");
});

console.log("4");

// Your Prediction (order)
//  1, 4, 3, 2


// Actual Output:
//1,4,3,2


// Explanation:
//Execution order is always execution stack-> microtask queue->macrotask queue
//1 and 2 are on execution stack and no waiting
// 3 is in setTimeOut which goes to web API to get completed then macrotask queue
// 4 is Promice when it resolves its .then goes to microtask queue
