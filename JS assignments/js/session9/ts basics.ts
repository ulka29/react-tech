// npx tsc
//node dist/index.js
const prices : number[] = [100,200,300]
function calculateTotal(arr:number[]): number {
    let sum : number = 0
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(calculateTotal(prices))


function add(a: number , b:number): string | null{
    if(a+b>100) return "greater then 100"
    return null;
}
console.log(add(2,5));