//descriptors
// A property is a key-value pair attached to an object.
// Each property has more than just a value — it has hidden metadata called descriptors
const obj = { x: 10 }; //x = property name / key and 10=value

// Default for normal object properties: writable: true, enumerable: true, configurable: true
// 🔹 Modify descriptors
Object.defineProperty(obj, 'x', {
  writable: false,
  enumerable: false
});





// Getter/setter = special property with hidden functions
// They are NOT methods
// They are Accessor Descriptors
//When you use get or set, JS creates:
// They look like properties but behave like functions.


// Data Descriptor (normal property
let obj = {
  name: "Ulka"
}
console.log(Object.getOwnPropertyDescriptor(obj, "name"))
//{ value: 'Ulka', writable: true, enumerable: true, configurable: true }


// Accessor Descriptor (getter/setter)
// backing variable = _age
//"A backing variable is an internal property that stores the actual value of a field, while getters and setters provide controlled access for validation, formatting, or side effects."
// Backing variable = hidden storage + controlled access pattern
let user = {
  first: "Ulka",
  last: "Patel",
  _age: 18,

  get fullName() {
    return this.first + " " + this.last;
  },

  get age() {
    return this._age;
  },

  set age(v) {
    if (v < 0) throw Error("Invalid age");
    this._age = v;
  }
}
console.log(Object.getOwnPropertyDescriptor(user, "_age"))
// { value: 18, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(user, "age"))
// {
//   get: [Function: get age],
//   set: [Function: set age],
//   enumerable: true,
//   configurable: true
// }
user.age=10;
// user.age = -10   //Blocked
console.log(user.age) //10
user._age=15;
console.log(user.age) //15
console.log(user._age)//15





// Private fields
//"Private fields are not properties and are stored in internal slots, so reflection APIs like Object.getOwnPropertyDescriptor cannot access them."

class User {
  #age = 18;
  x=10;

  get age() {
    return this.#age;
  }

  set age(v) {
    if (v < 0) throw Error("Invalid age");
    this.#age = v;
  }
}
let u = new User();
console.log(Object.getOwnPropertyDescriptor(u, "#age"))  //undefined
console.log(Object.getOwnPropertyDescriptor(u, "x"))
//{ value: 10, writable: true, enumerable: true, configurable: true }
