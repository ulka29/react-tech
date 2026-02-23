// Problem: Get the total score of students who passed.
const students7 = [
  { name: "Alice", score: 45 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 65 },
];
// Expected Output: 120
const ans7 = students7.reduce((acc,curr,i)=>{
    if(curr["score"]>=50){
        acc=acc+curr["score"]
        return acc
    }
    return acc
},0)
console.log(ans7)