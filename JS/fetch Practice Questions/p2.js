// Level 2 — POST request
// Send new post: POST /posts
// Body:{ title: "Hello", body: "World" }
async function postData(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Hello",
                body: "World"
            })
        })
        const data= await res.json();
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

postData()