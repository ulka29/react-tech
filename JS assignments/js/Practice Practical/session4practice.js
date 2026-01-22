// A shallow copy:
// Creates a new outer object
// But nested objects/arrays still share the same reference
// 🔴 Only the first level is copied

const original = {
  name: "Ulka",
  skills: {
    lang: "JS"
  }
};

const copy = { ...original };

copy.name = "Patel";
copy.skills.lang = "Python";

console.log(original.name);        // "Ulka" ✅
console.log(original.skills.lang); // "Python" ❌ (unexpected)



const copy1 = Object.assign({}, orignal);
const copy2 = { ...orignal };



// What is a Deep Copy?
// A deep copy:
// Creates a completely independent copy
// All nested objects get new memory

const original1 = {
  name: "Ulka",
  skills: {
    lang: "JS"
  }
};

const deepCopy = structuredClone(original1);

deepCopy.skills.lang = "Python";

console.log(original.skills.lang); // "JS" ✅


const deepCopy1 = JSON.parse(JSON.stringify(original1));  //risky


// Object Destructuring: Extract values from an object by key name

const user = { name: "Ulka", age: 21 };
const { name, age } = user;


// Array Destructuring: Extract values from an array into variables by position.
const arr = [10, 20, 30];

const [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20

const [first, , third] = [1, 2, 3];

console.log(third); // 3



//Rest Operator (...) — Core Concept: Collect remaining values into a new array or object
const numbers = [1, 2, 3, 4];
const [first1, second, ...rest] = numbers;
console.log(rest); // [3, 4]


const response = {
  status: 200,
  data: { id: 1, name: "Ulka" },
  meta: { time: "10ms" }
};

const { data, ...info } = response;
console.log(data,info)