// 1. What is copying in JS?
// When you assign an object: obj2 does NOT create a new object. Both point to the same object in memory. This is why we need copying.

const obj1 = { name: "Alice" };
const obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // Bob




// 2️. Shallow Copy
// Definition: Creates a new object, but nested objects/arrays are still references.
// Only the first level is copied and Nested objects share memory

// Methods
// a) Object.assign()
// Proper cloning (common mistake)
// Wrong: let copy = Object.assign(obj); 
// Correct: let copy = Object.assign({}, obj); 

const obj3 = { name: "Alice", address: { city: "NY" } };
const obj4 = Object.assign({}, obj3);

obj4.name = "Bob";           // safe, first level
obj4.address.city = "LA";    // affects obj1 too!

console.log(obj4.address.city); // LA

// b) Spread Operator { ...obj }
const obj5 = { a: 1, b: { c: 2 } };
const obj6 = { ...obj5 };

obj6.a = 10;          // safe
obj6.b.c = 20;        // affects obj1!

console.log(obj5.b.c); // 20

// Both perform shallow copy.
// Object.assign mutates the target object, while spread creates a new object.
// Spread is cleaner and preferred in modern JavaScript, especially for immutability patterns like React state updates.





// 3️. Deep Copy
// Definition: Creates a new object with all levels copied, so changes in copied object do NOT affect original.

// Methods
// a) JSON serialization
const obj11 = { a: 1, b: { c: 2 } };
const obj22 = JSON.parse(JSON.stringify(obj11));

obj22.b.c = 20;

console.log(obj11.b.c); // 2
console.log(obj22.b.c); // 20

// Limitations:
// Cannot copy functions
// Cannot copy undefined
// Cannot copy Symbol
// Cannot copy Date correctly

// b) Structured clone (modern, safe)
const obj33 = { a: 1, b: { c: 2 }, d: new Date() };
const obj44 = structuredClone(obj33);

obj44.b.c = 20;

console.log(obj33.b.c); // 2
console.log(obj44.b.c); // 2

// c) Custom recursive function (manual deep copy)
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepCopy);

  const copy = {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}

const obj55 = { a: 1, b: { c: 2 } };
const obj66 = deepCopy(obj55);
obj55.b.c = 10;
console.log(obj66.b.c); // 2
