// Async and Promise JS problems


// Level 1 — Create your first Promise
// Create a function: delay(ms) that resolves after ms milliseconds.

function delay(num){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },num)
        
    })
}
delay(10000).then(() => console.log("Done"));