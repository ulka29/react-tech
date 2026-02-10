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




