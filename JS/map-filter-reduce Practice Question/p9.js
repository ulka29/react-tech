// Problem: Group students by pass/fail.
const students9 = [
  { name: "Alice", score: 45 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 65 },
];
// Expected Output: { pass: [{name:"Bob", score:55},{name:"Charlie",score:65}], fail: [{name:"Alice", score:45}] }
const ans9= students9.reduce((acc,curr,i)=>{
    if(curr["score"]>50){
        acc["pass"].push(curr)
        return acc
    }
    acc["fail"].push(curr)
    return acc
},{pass:[],fail:[]})
console.log(ans9)