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





// ### Code Block 2: Nested Async
console.log("Start");

setTimeout(function() {
 console.log("Timeout 1");
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);

Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});

console.log("End");


// **Your Prediction (order):**
```
start
End
Promise 2 
timeout 1
Promise 1
timeout 2
```


// **Actual Output:**
```
Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2
```


// **Explanation:**
```
Execution order is always execution stack-> microtask queue->macrotask queue

start is executes in main stack
set time out goes in web api to complete after complition its callback goes to macrotask queue
Promise resolves and .then goes to microtask
as order microtask is taken and promise 2 is printed
set time out goes in web api to complete after complition its callback goes to macrotask queue
now first timeout executes and prints timeout 1
again it has promise so Promise resolves and .then goes to microtask
now microtask has promise to execute so it executes
now microtask is empty 
macrotask queue executes callback and timeout 2 prints
```




// ### Code Block 3: Multiple Microtasks

console.log("A");

Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});

Promise.resolve().then(function() {
 console.log("E");
});

setTimeout(function() {
 console.log("F");
}, 0);

console.log("G");

// **Your Prediction (order):**
```
A
G
B
D
E
C
F

```

// **Actual Output:**
```
A
G
B
D
E
C
F
```


// **Explanation:**
```
Execution order is always execution stack-> microtask queue->macrotask queue

A prints
Promise resolves and .then callback goes to microtask queue (B,C,D)
again Promise resolves and .then callback goes to microtask queue (E)
set time out F goes to macro task queue
G prints
execution stack empty
first task of microtask queue in execution stack(B,C,D)
B prints
again promise resolved and C goes in microtask queue
D prints
next task of microtask queue in execution stack(E)
E prints
next task of microtask queue in execution stack(c)
C prints
Now microtask queue is empty so macrotask executes
F prints
everything empty now

```





// ### Code Block 4: Complex Async Chain

console.log("1");

setTimeout(function() {
 console.log("2");
}, 0);

queueMicrotask(function() {
 console.log("3");
});

Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});

setTimeout(function() {
 console.log("6");
}, 0);

console.log("7");



// **Your Prediction (order):**
```
1
7
4
2
6
```

// **Actual Output:**
```
1
7
3
4
5
2
6
```

// **Explanation:**
```
queueMicrotask() is a JavaScript Web API that: Schedules a function to run in the microtask queue
Execution order is always execution stack-> microtask queue->macrotask queue

1 prints
setTimeout callback goes to macrotask queue (2)
queueMicrotask callback goes to microtask queue (3)
Promise resolves and .then callback goes to microtask queue (4,5)
setTimeout callback goes to macrotask queue (6)
7 prints
call stack is empty
first micro task executes (3)
3 prints
second microtask executes(4,5)
4 prints
queueMicrotask callback goes to microtask queue (5)
next micro task executes (4)
Now microtask queue is empty
Now macrotask executes
2 prints
6 prints

```







// ### Code Block 5: Async/Await

console.log("Start");

async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}

asyncFunction();

Promise.resolve().then(function() {
 console.log("Promise 1");
});

setTimeout(function() {
 console.log("Timeout");
}, 0);

console.log("End");



// **Your Prediction (order):**
```
start
Async 1
End
async 2
Promise 1
timeout
```


// **Actual Output:**
```
Start
Async 1
End
Async 2
Promise 1
Timeout
```


// **Explanation:**
```
Execution order is always execution stack-> microtask queue->macrotask queue

Start prints
async function is called
Async 1 prints
await called
rest of the function suspended untill promise resolved and then goes to microtask queue
in between JS is not paused and continues
Promise resolves and .then goes to microtask queue (Promise 1)
setTimeout goes to macrotask queue
End prints
call stack empty
first microtask executes (async 2)
async 2 prints
Next microtask executes (Promise 1)
now microtask queue is empty
now macrotask executs
prints timeout

```





// ## Task 2: setTimeout Examples
// Objective: Complete and understand various setTimeout scenarios.

// ### Exercise 1: Basic setTimeout
// Task:Create a function that logs numbers 1 to 5, with a 1-second delay between each number.

function countWithDelay() {
    for(let i=1; i<6;i++){
        setTimeout(()=>{
            console.log(`after ${i} seconds`)
        },i*1000)
    }
}
countWithDelay();





// ### Exercise 2: setTimeout in Loop (Fix the Bug)
// Task:Fix the following code so it logs 0, 1, 2 instead of 3, 3, 3.

// BUGGY CODE - Fix this
for (let i = 0; i < 3; i++) {
 setTimeout(function() {
   console.log(i); // Currently logs: 3, 3, 3
 }, 1000);
}

// TODO: Fix the code above to log 0, 1, 2
// changes var to let
// as let is block scoped in callback closure they dont share a common i but their i are different so it logs 0 1 2





// ### Exercise 3: setTimeout with Clear
// Task: Create a countdown timer that counts from 10 to 0, then stops.
// TODO: Implement countdown function

function countdown(start) {
    for (let i = 10; i >=0; i--) {
        let t=start-i
        setTimeout(function() {
            console.log(i); 
        }, t*1000);
    }
}
countdown(10);

