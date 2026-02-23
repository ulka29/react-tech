// Level 4 — Convert callback to Promise

// Convert: setTimeout(callback, 1000)
// into: wait(1000)
// that returns a promise.
console.log("start")
function wait(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        }, num)
    })
}
wait(10000).then(()=>{
    console.log("Done")
})