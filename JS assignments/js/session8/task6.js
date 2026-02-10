// ## Task 2: setTimeout Examples
// Objective: Complete and understand various setTimeout scenarios.

// ### Exercise 1: Basic setTimeout
// Task:Create a function that logs numbers 1 to 5, with a 1-second delay between each number.

function countWithDelay() {
    for(let i=1; i<6;i++){
        setTimeout(()=>{
            console.log(`after ${i} seconds`)
        },i*1000)
    }
}
countWithDelay();



