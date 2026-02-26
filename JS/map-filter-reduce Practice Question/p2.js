// Problem: Filter out even numbers from an array.
// const numbers = [1, 2, 3, 4, 5, 6];
// Expected Output: [1, 3, 5]
const numbers2 = [1, 2, 3, 4, 5, 6];
const ans2 = numbers2.filter((curr,i)=>{
    if(curr%2 != 0){
        return true
    }
    return false
})
console.log(ans2)