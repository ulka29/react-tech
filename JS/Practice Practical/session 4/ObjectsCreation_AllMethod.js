// Method 1 — Object Literal {} (MOST COMMON)
const person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log("Hi");
  }
};
// Memory note
// const p1 = { greet() {} }
// const p2 = { greet() {} }
// Problem:
// Two copies of greet function in memory
// Later → prototype solves this.





// Method 2 — new Object() Rarely used
const person1 = new Object();
person1.name = "Alice";
person1.age = 25;
// Internally: Same as {}
// {} === new Object()





// Method 3 — Object.create(xyz)  (VERY IMPORTANT)
// It creates a new empty object and sets its internal prototype to the provided object(xyz), allowing the new object to inherit properties and methods from that prototype.
// Creates a new object whose prototype is xyz

// Prototype = A backup object used when a property is not found.
// If object doesn't have something → look in prototype

const userMethods = {
  greet() { console.log("Hi"); }
};
const u1 = Object.create(userMethods);
u1.name = "Alice";

const u2 = Object.create(userMethods);
u2.name = "Bob";
console.log(u1)                                //{ name: 'Alice' }

// JS searches like this:
// 1️⃣ obj.greet ? ❌ not found
// 2️⃣ obj.__proto__.greet ? ✅ found
console.log(u1.__proto__)                      // { greet: [Function: greet] }
console.log(Object.getPrototypeOf(u1))         // { greet: [Function: greet] }
console.log(userMethods.__proto__)             //[Object: null prototype] {}










