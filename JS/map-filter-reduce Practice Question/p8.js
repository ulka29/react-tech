// Problem: Create a list of unique skills from all users.
const users8 = [
  { name: "Alice", skills: ["JS", "Python"] },
  { name: "Bob", skills: ["Python", "Java"] },
];
// Expected Output: ["JS", "Python", "Java"]
const ans8= users8.reduce((acc,curr,i)=>{
    
    curr["skills"].forEach((skill)=>{
        acc.push(skill)
    })
    return acc;
},[])
const uniqueset = new Set(ans8)
const uniquearr = [... uniqueset]
console.log(uniquearr)

//Method 2
const ans82= users8.map((curr,i)=>{
    curr = curr.skills
    return curr
}).reduce((acc,curr,i)=>{
   const ans = acc.concat(curr) 
   return ans
},[])

const uniqueset1 = new Set(ans82)
const uniquearr1 = [... uniqueset1]
console.log(uniquearr1)