// 1. Default Parameters
// Before ES6:
function greet(name) {
  name = name || "Guest";
  console.log("Hello " + name);
}

// Modern way
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();        // Hello Guest
greet("Alice"); // Hello Alice
greet(undefined); // uses default
greet(null);      // null (default NOT used)





// 2. Rest Parameters (...)
// Used when you don’t know how many arguments will come.
// Old way (bad)
function sum() {
  console.log(arguments); // weird array-like object
}
sum(1,2,3,4,5)   //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

// Modern way
function sum(...numbers) {
  console.log(numbers);
}
sum(1,2,3,4); // [1,2,3,4]

// Mix normal + rest
function greet(message, ...names) {
  console.log(message, names);
}
greet("Hi", "A", "B", "C"); // Hi ['A','B','C']





//3. Closures (VERY VERY IMPORTANT)
// A function that remembers variables from its outer scope even after outer function finishes.
function createBankAccount() {
  let balance = 0;
  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    }
  };
}
const acc = createBankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100





//4. IIFE (Immediately Invoked Function Expression)
// A function that runs immediately after creation.
// Before ES6 modules, used for: avoid global variables, encapsulation, libraries (jQuery style)
(function() {
  console.log("I run immediately");
})();

(() => {
  console.log("Arrow IIFE");
})();





function test() {}
console.log(typeof test); // function
//type function
//But also behaves like object
test.hello = "hi";
console.log(test); //[Function: test] { hello: 'hi' }

//Also have prototype
function Person() {
    console.log("hi")
    const counter=0;
}
console.log(Person.prototype);  //{}





// What is a Factory in JavaScript?
// A factory is a function that creates and returns objects.
// without No: ❌ new ❌ this ❌ constructor

function createUser(name) {
  return {
    name,
    greet() {
      console.log("Hi " + name);
    }
  };
}
const u = createUser("John");
u.greet();

// But there is a problem (important)
// Every object gets its own copy of methods.
const u1 = createUser("A");
const u2 = createUser("B");
// ✅ Constructor advantage (shared memory)
// User.prototype.greet = function() {};
