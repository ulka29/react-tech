// Problem: Double all numbers in an array.

// const numbers = [1, 2, 3, 4, 5];
// Expected Output: [2, 4, 6, 8, 10]

const numbers1 = [1, 2, 3, 4, 5];
const ans1=numbers1.map((curr,i)=>{
    curr=curr*2;
    return curr;
})
console.log(ans1)