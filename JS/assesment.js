//Async Data aggregation using Promises
function user(){
    return new Promise((resolve)=>{
        resolve("lenne grahm")
    })
}
function post(){
    return new Promise((resolve)=>{
        resolve(10)
    })
}
function commentCount(){
    return new Promise((resolve)=>{
        resolve(5)
    })
}

async function dataAgg() {
    const res = await Promise.all([user(),post(),commentCount()])
    return res
}
dataAgg().then((data)=>{
    const obj = {
        user: data[0],
        postCount: data[1],
        commentCounts:data[2]
    }
    console.log(obj)
})



// Retry logic
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




//Chunk an array
function chunckArr(arr,size){
    const ans = arr.reduce((acc,curr,i)=>{
        if(i%size===0){
            acc.push(arr.slice(i,i+size))
        }
        return acc
    },[])
    return ans;
}
console.log(chunckArr([1,2,3,4,5,6,7],2))


// JS: Transform Array of Objects into Tag-Based Mapping
const input = [
{ id: 3, tags: ["a","b"]},
{ id: 1, tags: ["b","c"]},
{ id: 2, tags: ["a","c","d"] },
{ id: 2, tags: ["d","e"] }, // duplicate id
];

const ans = input.reduce((acc,curr,i)=>{
    curr.tags.forEach((x)=>{
        if(!acc[x]){
            acc[x]=new Set();
        }
        acc[x].add(curr.id)
    })
    return acc;

},{})

for(let i in ans){
    ans[i]=[...ans[i]].sort()
}

console.log(ans)