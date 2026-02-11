var p1 = Promise.resolve("A")
console.log(p1)      //Promise { 'A' }

async function greet() {
  return "Hello"
}
console.log(greet())    //Promise { 'Hello' }
greet().then(res => console.log(res)) // Hello


let p2=p1.then((resolveData) => {
    console.log("DATA RECEIVED IN THEN: ", resolveData);   //DATA RECEIVED IN THEN:  A
    return "NEXT VALUE";
})

console.log(p2)  //Promise { <pending> }
setTimeout(()=>{
    console.log(p2)   //Promise { 'NEXT VALUE' }
},2000)

// Output:
// Promise { 'A' }
// Promise { 'Hello' }
// Promise { <pending> }
// Hello
// DATA RECEIVED IN THEN:  A
// Promise { 'NEXT VALUE' }
