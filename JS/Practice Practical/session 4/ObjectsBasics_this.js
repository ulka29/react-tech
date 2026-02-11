//An object is a collection of key-value pairs
const person = {
  name: "Alice",
  age: 25
};
console.log(person.name); // Alice
console.log(person.age);  // 25
console.log(person);    //{ name: 'Alice', age: 25 }





//You can add, update, or delete properties at runtime.
person.job = "Engineer";     // add
person.age = 26;             // update
delete person.name;          // delete
console.log(person); // { age: 26, job: 'Engineer' }





//Accessing properties: dot . vs bracket []
//Dot notation:
console.log(person.age); // 26
//Bracket notation:
console.log(person["job"]); // Engineer


// let key = "age";
// person.key   // wrong
// person.user-name // minus operator
// person.first name  // syntax error





//A method is just a function attached to an object.
//this refers to the object that called the method (person in this case).
const person1 = {
  name: "Bob",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
person1.greet(); // Hello, Bob

// Shorthand method syntax (ES6):
const person = {
  name: "Bob",
  greet() {
    console.log("Hello, " + this.name);
  }
};





//The this keyword
// Object method call -> this = the object
const obj = {
  name: "Alice",
  greet() { console.log(this.name); }
};
obj.greet(); // Alice

// Standalone function → this = window (browser) or undefined (strict mode)
function sayHi() {
  console.log(this);
}
sayHi(); // window (non-strict) or undefined (strict)

// Constructor function (new) → this = new object created
function Person2(name) {
  this.name = name;
}
const p = new Person2("Charlie");
console.log(p.name); // Charlie

// Arrow functions -> do not have their own this, take from lexical scope
const obj1 = {
  name: "Alice",
  greet: () => { console.log(this.name); }
};
obj1.greet(); // undefined (because arrow takes 'this' from outside, usually window/global)
