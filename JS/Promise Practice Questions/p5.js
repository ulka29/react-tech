// Level 5 — Promise.all basics

// Given:task1(), task2(), task3()
// Run them parallel and print: All done
// Focus → Promise.all

function task1(){
    return Promise.resolve(1);
}
function task2(){
    return Promise.resolve(2);
}
function task3(){
    return Promise.resolve(3);
}

Promise.all([task1(),task2(),task3()])
.then((data)=>{
    console.log(data)
    console.log("All done")
})
.catch((data)=>{
    console.log(data)
    console.log("failed")
})

// Output:
// [ 1, 2, 3 ]
// All done