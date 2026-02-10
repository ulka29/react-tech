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



