// Level 2 — Promise that may fail
// Create:randomSuccess()
// ✔ resolves "Success"
// ✔ rejects "Failed" randomly
// Handle using .then() and .catch()

function randomSucess(){
    return new Promise((resolve,reject)=>{
        Math.random() >0.5 ? resolve("Success") : reject("Failure")
    })
}
randomSucess().then((data)=>{
    console.log(data)
})
.catch((data)=>{
    console.log(data)
})