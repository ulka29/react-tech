// Level 6 — Rewrite Level 3 using async/await
// Convert chaining into:
// async function runSteps() {}
function step(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`step ${num}`)
            resolve()
        },1000)
    })
}
async function runSteps() {
    const step1 = await step(1);
    const step2 = await step(2);
    const step3 = await step(3);
}
runSteps()