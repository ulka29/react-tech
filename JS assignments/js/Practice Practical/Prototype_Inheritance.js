// JavaScript is prototype-based
// Even ES6 class → internally uses prototype


// Object.create(xyz) 
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



// JS search order

// obj.property
//    ↓
// 1️⃣ obj.property
// 2️⃣ obj.__proto__.property
// 3️⃣ Object.prototype.property
// 4️⃣ null → stop




// Before classes existed, inheritance was done like this:
const animal = {
  eat() {
    console.log("Eating...");
  }
};

const dog = Object.create(animal);

dog.bark = function () {
  console.log("Woof!");
};
console.log(dog);                              //{ bark: [Function (anonymous)] }
console.log(dog.__proto__);                    //{ eat: [Function: eat] }
console.log(dog.__proto__.__proto__);          //[Object: null prototype] {}
//This is Object.prototype and Contains default methods like:
// toString
// hasOwnProperty
// valueOf
console.log(dog.__proto__.__proto__.__proto__); //null
