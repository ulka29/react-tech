
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






