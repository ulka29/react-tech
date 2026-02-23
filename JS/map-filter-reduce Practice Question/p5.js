// Problem: Create an array of objects with doubled scores.
const students5 = [
  { name: "Alice", score: 30 },
  { name: "Bob", score: 40 },
];
// Expected Output: [{name: "Alice", score: 60}, {name: "Bob", score: 80}]

const ans5=students5.map((curr,i)=>{
    curr["score"]=curr["score"]*2
    return curr
})
console.log(ans5)