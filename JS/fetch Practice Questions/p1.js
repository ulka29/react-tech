// Level 1 — Basic fetch GET
// Fetch:/users
// Print all names. Focus → fetch + json()

async function getData(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await res.json();
        console.log(res)
        console.log(data)

    }catch(err){
        console.log(err)
    }
}
getData()