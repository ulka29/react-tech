// 5) Write a function downloadFile(url, callback) that simulates a 3-second delay using setTimeout.
// After the delay, log "Download complete: [url]" and execute the callback function.

function downloadFile(url, callback){
    console.log("delay");

    setTimeout(() => {
        console.log(`Download complete: ${url}`);
        callback();
    }, 3000);
}

function callback(){
    console.log("callback executing...");
}

downloadFile("google.com", callback);

// 6) Create three functions step1, step2, and step3, each accepting a callback and completing after 1 second using setTimeout.
// Call them in sequence using nested callbacks.
// Log "All steps finished" only after step3 completes.

function callback1(){
    console.log("callback 1 executing...");
}
function step1(cb){
    setTimeout(()=>{
        console.log("step 1 completed")
        cb()
        
    },1000)
}

function step2(cb){
    setTimeout(()=>{
        console.log("step 2 completed")
        cb()
    },1000)
}

function step3(cb){
    setTimeout(()=>{
        console.log("step 3 completed")
        cb()
        
    },1000)
}



step1(()=>{
    step2(()=>{
        step3(()=>{
            callback1();
            console.log("All step finished")
        })
    })
})


// 7) Create a function tossCoin() that returns a Promise.
// Resolve with "Heads" if a random number is greater than 0.5, otherwise reject with "Tails".
// Consume the promise using .then() and .catch().
function tossCoin(){
    return new Promise((resolve,reject)=>{
        const val = Math.random()
        if(val>0.5){
            resolve("Heads")
        }
        else{
            reject("Tails")
        }
    })
}

const p = tossCoin()
p.then((data)=>{
    console.log(data)
})
.catch((data)=>{
    console.log(data)
})



// 8) Create a Promise that resolves with the number 5.
// Chain .then() to double the number, then another .then() to add 20, and finally log the result.
function fifth(val){
    return new Promise((resolve,reject)=>{
        if(val==5){
            resolve(val);
        }
        else{
            reject(val);
        }
    })
}

const p2 = fifth(5)
p2.then((data)=>{
    data = data * 2;
    return data
}).then((data)=>{
    data = data+20
    return data;
})
.then((data)=>{
    console.log(data)
})
.catch((data)=>{
    console.log("Not five")
})



// 9) Create a function wait(ms) that returns a Promise and resolves after ms milliseconds using setTimeout.
// Use it to log "2 seconds passed" after 2000 ms.

function wait(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(ms)
        },ms * 1000)
    })
}

const p3 = wait(2);
p3.then((ms)=>{
    console.log(`${ms} seconds passed`)
})



// 10) Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
// Part A: Run three tasks sequentially using async/await.
// Part B: Run three tasks simultaneously using Promise.all().
// Compare the total time taken for Part A vs Part B.

function simulateTask(name, delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${name} finished`);
        },delay*1000)
    })
}
async function task(){
    //part a
    console.time("myFunctionDuration")
    const task1 = await simulateTask("task1",1)
    console.log(task1)
    const task2 = await simulateTask("task2",2)
    console.log(task2)
    const task3 = await simulateTask("task3",3)
    console.log(task3)
    console.timeEnd("myFunctionDuration")

    //part b
    console.time("myFunctionDuration1")
    const all = await Promise.all([simulateTask("task4",1),simulateTask("task5",2),simulateTask("task6",3)])
    console.log(all)
    console.timeEnd("myFunctionDuration1")


}
task()