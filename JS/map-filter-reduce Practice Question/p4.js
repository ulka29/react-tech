// Problem: Get the names of all students who scored above 50.
const students4 = [
  { name: "Alice", score: 45 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 65 },
];
// Expected Output: ["Bob", "Charlie"]

// filter from score then add in array
const ans4 = students4.filter((curr,i)=>{
    if(curr["score"]>50){
        return true
    }
    return false
}).reduce((acc,curr,i)=>{
    acc.push(curr["name"]);
    return acc;
},[])
console.log(ans4)