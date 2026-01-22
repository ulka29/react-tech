// 1. Predict the output and explain the memory state.


const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;
  
  return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length);
// it is 2 because of shallow copy reference of active is stored
console.log(registry.active[0].name); 
//shallow copy and reference save name is modified and is Gamma
console.log(registry.version);       
//undefied because of version is added to new object and reference address





// 2. Identify why the following code throws an error and fix it without using the class keyword.
//status: pending

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

// Intent: Dog should inherit from Animal
Dog.prototype = Animal.prototype; 

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark(); // Why does this happen?
console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?





// 3. Predict the result of the following execution.


function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand);   //generic 
// If constructor returns an OBJECT → JS replaces this
// returned object is used 
// myPhone becomes:
// {
//   brand: "Generic",
//   os: "Android"
// }
// with no this
console.log(myPhone.__proto__ === SmartPhone.prototype); //false
console.log(myPhone.getBrand); //undefined






// 4. Write a function called masterClone(obj) that performs a deep copy without using JSON.stringify or structuredClone.


const original = {
  name: "Ulka",
  skills: {
    lang: "JS"
  }
};
function deepCopy(obj){
    if(obj==null || obj!=="object")return obj;
    const clone=Array.isArray(obj)?[] : {};
    for(let key in obj){
        clone[key]=deepCopy(obj[key]);
    }
    return clone;

}

deepcopynew=deepCopy(original);
console.log(deepcopynew)





// 5. Trace the execution of this class logic.


class Counter {
  static count = 0;
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount());        // 10
console.log(Counter.getStaticCount()); // 2
console.log(c1.getStaticCount());  // error



// static → belongs to class
// non-static → belongs to object

// Non static belongs to the instance
// count
// getCount()

// static belongs to the class and constructor runs whenever the instance created
// static values are always remembered
// static count
// static getStaticCount()