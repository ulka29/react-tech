// Level 10 — Timeout wrapper

// Create:withTimeout(promise, ms)
// If promise takes too long → reject "Timeout"
// Hint: Promise.race

async function withTimeout(promise, ms){
    try{
            const timeout = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject("Failed")
            },ms)
        })
        const ans = await Promise.race([promise,timeout])
        console.log(ans)
    }
    catch{
        console.log("Failed")
    }
}
const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("success")
    },5000)
})
withTimeout(p2, 1000)