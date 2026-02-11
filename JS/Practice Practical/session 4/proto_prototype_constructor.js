// 1. Constructor Function (classic JS way)
// Before ES6 classes, this was the standard.
function Person3(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person3("John", 25);
const p2 = new Person3("Alice", 30);

// What does new actually do internally?
// 1️. Create empty object :{}
// 2️. Bind this to that object: this = {}
// 3️. Add properties: this.name = "John"  this.age = 25
// Now object becomes: { name: "John", age: 25 }
// 4️. Return object automatically: return this

// 2. Modern way — Class Constructor (ES6)
class Person4 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const p3 = new Person4("John", 25);

// Important
// This: class Person {} is just syntactic sugar over:
// function Person() {} Under the hood → same thing.

// greet(); // normal call
// new Person(); //constructor function







// prototype is a property of a function that defines methods and properties shared by all objects created using that function (constructor).

// __proto__ is an internal reference of an object that points to its parent (prototype) object.

// constructor: Points back to function that created object

function Person(name, age) {
  this.name = name;   // instance property
  this.age = age;
}

// shared method
Person.prototype.sayHi = function () {
  console.log("Hi, I'm " + this.name);
};

let p = new Person("Ulka", 21);

//Indernally
// let p = {};
// p.__proto__ = Person.prototype;
// Person.call(p, "Ulka", 21);
console.log(p.name); // Ulka
console.log(p.age);  // 21
console.log(p.__proto__);          //{ sayHi: [Function (anonymous)] }
console.log(Person.prototype);     //{ sayHi: [Function (anonymous)] }

console.log(p.constructor);                  //[Function: Person]
console.log(Person);                         //[Function: Person]
console.log(Person.prototype.constructor);   //[Function: Person]







class Person1 {
  constructor(name, age) {
    this.name = name;   // instance property
    this.age = age;
  }
  sayHi1() {
    console.log("Hi, I'm " + this.name);
  }
}

class Student extends Person1 {
  constructor(name, age, marks) {
    super(name, age);   // calls Person constructor
    this.marks = marks;
  }
  study() {
    console.log(this.name + " is studying");
  }
}

class Topper extends Student {
  constructor(name, age, marks, rank) {
    super(name, age, marks);
    this.rank = rank;
  }
  showRank() {
    console.log("Rank:", this.rank);
  }
}

let t = new Topper("Ulka", 21, 95, 1);

// Behind the scenes (VERY IMPORTANT)
// Classes are just syntax sugar
// JS internally converts:
//JS internally converts:

// class Person {}
// Into:
// function Person() {}
// Person.prototype.sayHi = ...

// class = constructor + prototype

console.log(t. __proto__)                                             //Student {}
console.log(t. __proto__. __proto__)                                  //Person1 {}
console.log(t. __proto__. __proto__. __proto__)                       //{}
console.log(t. __proto__. __proto__. __proto__. __proto__)            //[Object: null prototype] {}
console.log(t. __proto__. __proto__. __proto__. __proto__. __proto__) //null
console.log(Topper.prototype)                                         //Student {}
console.log(Student.prototype)                                        //Person1 {}
console.log(Person1.prototype)                                        //{}
console.log(Object.prototype)                                         //[Object: null prototype] {}
console.log(t.constructor)                                            //[class Topper extends Student]

// Why not showing functions?
// Because class methods are non-enumerable, and console only shows enumerable properties.
//Topper.prototype
// looks empty: {} But functions are still there — just hidden.


