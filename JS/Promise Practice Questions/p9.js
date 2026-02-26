// Level 9 — Run parallel tasks with await
// Run 3 delays together, not sequentially.

// Expected: Total time ≈ 1s (not 3s)
// Focus: await Promise.all()


function wait(ms){
    return new Promise((resolve) => {
     setTimeout(()=>{resolve("Resolved")}, ms);   
    })
} 
async function ParallelWait(){
    const ans= await Promise.all([wait(1000),wait(1000),wait(1000)])
    console.log(ans)
}
ParallelWait()