// Level 5 — Retry logic
// Create: fetchWithRetry(url, retries)
// If fails → retry automatically.
// Example:retry 3 times

async function fetchWithRetry(url, retries){
    try{
        const res = await fetch(url)
        if(!res.ok){
            throw new Error("retrying")
        }
    }catch (err){
        if(retries===0){
            throw new Error("failed to load")
        }
        console.log(err)
        fetchWithRetry(url, retries-1)  
    }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/post=s",5)