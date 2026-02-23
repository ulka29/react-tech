// Level 3 — Error handling
// Simulate wrong URL and show: Failed to load data
// Use: response.ok

async function errorHandled(url){
    try{
        const res = await fetch(url)
        if(!res.ok) throw new Error("Failed to load data");
        const data = await res.json();
        console.log(data)
    }catch(err){
        console.log(err)
    }
    console.log("Async ends")
}

errorHandled("https://jsonplaceholder.typicode.com/post=s")
console.log("Programm ends")