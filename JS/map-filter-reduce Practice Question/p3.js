// Problem: Sum all numbers in an array.
// const numbers = [10, 20, 30, 40];
// Expected Output: 100
const numbers3 = [10, 20, 30, 40];
const ans3=numbers3.reduce((acc,curr,i)=>{
    acc=acc+curr;
    return acc
},0)
console.log(ans3)