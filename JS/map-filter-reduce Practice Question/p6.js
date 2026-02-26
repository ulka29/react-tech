// Problem: Count how many students passed (score >= 50).
const students6 = [
  { name: "Alice", score: 45 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 65 },
];
// Expected Output: 2
const ans6=students6.filter((curr,i)=>{
    if(curr["score"]>=50) return true
    return false
}).reduce((acc,curr,i)=>{
    acc++;
    return acc
},0)
console.log(ans6)