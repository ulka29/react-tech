
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




