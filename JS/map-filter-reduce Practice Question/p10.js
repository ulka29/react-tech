// Problem: Flatten a nested array and sum only numbers greater than 10.
const nestedNumbers = [5, [15, 20], [3, [12, 25]]];
// Expected Output: 72

function flatten(arr){
    let flat= [];
    
    arr.forEach((x)=>{
        if(Array.isArray(x)){
            let y=flatten(x)
            flat=flat.concat(y)
        }
        else{
            flat.push(x)
        }
    })
    return flat
}
const flattened = flatten(nestedNumbers)
const ans10 = flattened.reduce((acc,curr,i)=>{
    if(curr>10){
        acc=acc+curr;
    }
    return acc
},0)
console.log(ans10)