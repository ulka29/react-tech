// Level 4 — Fetch multiple users
// Fetch:/users/1, /users/2, /users/3
// parallel Combine results into one array.
// Focus → Promise.all + fetch

async function parellet(){
    const res= await Promise.all([fetch("https://jsonplaceholder.typicode.com/posts"),fetch("https://jsonplaceholder.typicode.com/posts"),fetch("https://jsonplaceholder.typicode.com/posts")])
    const data = await res.map(r => r.json())
    console.log(data)
}
parellet()