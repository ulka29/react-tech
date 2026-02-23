// Problem 3: API Data Formatter (Fetch + Array Methods)
// Objective: Fetch data from an API and transform it using modern JavaScript array methods.
// Input: Assume the API returns the following data:
        // const input = [
        //   { id: 1, name: "Amit", active: true },
        //   { id: 2, name: "Neha", active: false }
        // ]
// Requirements:
// Fetch data using fetch
// Handle API failure gracefully
// Filter only active users
// Transform data into the format:

// Expected Output
            // [
            //   { userId: 1, userName: "Amit" }
            // ]

function fakeFetch(url) {
    return Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
            { id: 1, name: "Amit", active: true },
            { id: 2, name: "Neha", active: false },
            { id: 3, name: "Sneha", active: true }
        ])
    });
}

function transform(arr){
    const ans = arr.reduce((acc,curr,i)=>{
        if(curr.active){
            const obj1 = {
                userID : curr["id"],
                userName: curr["name"]
            }
            acc.push(obj1)
            return acc
        }
        return acc
            
    },[])
    return ans
}

async function ApiData(url){
    try{
        const res = await fakeFetch(url)
        if(!res.ok) throw new Error(`error ${res.status}`)
        const data = await res.json()
        const ans = transform(data)
        console.log(ans)
        
    }catch(err){
        console.log(err)
    }
}
ApiData("abc")