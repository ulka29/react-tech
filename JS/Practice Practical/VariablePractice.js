//Experiment 1 — Scope
if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a);   // 10
console.log(b);   // ReferenceError
console.log(c);   // ReferenceError

    //var leaks outside blocks → causes data corruption in large codebases
    //let and const are block-safe


//Experiment 2 — Redeclaration

var x = 1;
var x = 2;   // allowed

let y = 1;
let y = 2;   // crash

const z = 1;
const z = 2; // crash

    // var allows silent overwrite
    // let & const prevent accidental variable reuse


// Experiment 3 — Hoisting
console.log(a);   // undefined
console.log(b);   // ReferenceError
console.log(c);   // ReferenceError

var a = 10; //global zone
let b = 20; // temporal dead zone
const c = 30;



// Experiment 4 — Reassignment
var a = 10;
a = 20;   // OK

let b = 10;
b = 20;   // OK

const c = 10;
c = 20;   // Error
    //const protects critical values from accidental change.



//Experiment 5 — Const is NOT immutable (Huge misunderstanding)
const user = {
    name: "Ulka",
    age: 21
};

user.age = 22;     // allowed
user.city = "Pune"; // allowed

console.log(user);

user = {};   // ❌ Error
    //Rule:const protects the reference, not the data.


//Experiment 6 — Loop bug
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
    //output: 3 3 3

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
    //output:1 2 3


    // var shares one variable across all async callbacks
    // let creates a new variable per iteration
    //1.JS executes the loop synchronously:
    //2. Web APIs: [ callback1, callback2, callback3 ] (waiting 1 sec)
    //3.After 1 second Web APIs push callbacks into: Task Queue:[ cb1, cb2, cb3 ]
    //4.Event loop checks:Call Stack empty? YES → move callback
    //5.Callback enters Call Stack 
    //6.JS looks up i. Where is i? It is the same single var i, whose value is now: 3
    //7. but JS creates a new lexical environment per iteration so...





//Experiment 7 — Global object pollution
var a = 10;
let b = 20;

console.log(window.a); // 10
console.log(window.b); // undefined

    // var pollutes global namespace → causes library conflicts
    // let and const are safe



// Experiment 8 — Shadowing
let x = 10;
{
    let x = 20;
    console.log(x); // 20
}
console.log(x); // 10
//now with var
var y = 10;
{
    var y = 20;
}
console.log(y); // 20 outer overwritten

