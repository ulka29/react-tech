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





//Before classes existed, inheritance was done like this: methods shared and memory efficient
const userMethods1 = {
  greet() { console.log("Hi"); }
};

const u11 = Object.create(userMethods1);
u11.name = "Alice";

const u21 = Object.create(userMethods1);
u21.name = "Bob";

console.log(u11)                               //{ name: 'Alice' }
console.log(u11.__proto__)                     //{ greet: [Function: greet] }
console.log(u11.__proto__.__proto__)           //[Object: null prototype] {}
console.log(u11.__proto__.__proto__.__proto__) //null






//core inheritance mechanisms

// 1.Object.create(proto)
// Creates a new object whose __proto__ points to proto
// Only links prototype

const Animal = {
  eat() {
    console.log("Eating...");
  }
};

const dog = Object.create(Animal);

dog.bark = function () {
  console.log("Barking...");
};

dog.eat();   // inherited
dog.bark();  // own
console.log(dog)                       //{ bark: [Function (anonymous)] }
console.log(dog.__proto__)             //{ eat: [Function: eat] }
console.log(dog.__proto__.__proto__)   //[Object: null prototype] {}





// 2️. Object.setPrototypeOf(obj, proto)
// Changes prototype of an existing object
//Very slow operation (changes prototype at runtime)
//Avoid in production
const Animal1 = {
  eat() {
    console.log("Eating...");
  }
};

const dog = {
  bark() {
    console.log("Barking...");
  }
};

Object.setPrototypeOf(dog, Animal1);

dog.eat();   // inherited
dog.bark();  // own
console.log(dog)                       //{ bark: [Function (anonymous)] }
console.log(dog.__proto__)             //{ eat: [Function: eat] }
console.log(dog.__proto__.__proto__)   //[Object: null prototype] {}





// assigning prototypes
// Shares same reference (breaks inheritance)

// ❌ INCORRECT PROTOTYPE ASSIGNMENT

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// INCORRECT: directly assigning prototype
Dog.prototype = Animal.prototype;  

Dog.prototype.bark = function() {
  console.log("Woof!");
};

console.log(Dog.__proto__)            //[Function (anonymous)] Object
console.log(Animal.__proto__)         //[Function (anonymous)] Object
console.log(Animal.prototype)         //{ eat: [Function (anonymous)], bark: [Function (anonymous)] }
console.log(Dog.prototype)           //{ eat: [Function (anonymous)], bark: [Function (anonymous)] }


const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");
console.log(myDog.constructor.name); // Animal instead of Dog

