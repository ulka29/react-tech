// Q1. Simple Object Context
const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand);

//Dell
//when this is attached with object it takes its properties




// Q2. Basic Promise Flow
console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);

//Promise gies to microtask queue and executes at end so 
//1 3 2






// Q3. The Broken Chain
Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));
//Error Occurred
//as promice rejected it goes to catch block





// Q4. Global vs. Local Scope
var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus()); //Online
// when using method with object this points to the object and as object has value online it returns online.




// Q5. Math in Promises

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));  //20
// in promice resolves sends 10 then takes the 10 does computation and return ans of that computation in a promise
// now next then takes it as an input and prints it in console




// Q6. The "Lost" Context

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);   //undefined
    }
};

const print = user.printName;
print();
// whenever we assign a method to the expression it losts its this values hence we see undefined





// Q7. Event Loop Basic Race

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
//Output:
// Start
// End
// Promise
// Timeout

//start and end are from main call stack so they execute first
//timeout goes to callback
//promse.then goes to microtask queue
//microtasks executes first then call stack executes it.





// Q8. Arrow Function Pitfall

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);  //undefined
    }
};

group.getTitle();

// Arrow functions don’t bind their own this. They inherit it from the surrounding (global) scope, not the object.
//as for current its parent is global and global has no title so it shows undefined





// Q9. Chaining Returns

Promise.resolve(5)
    .then((val) => {
        console.log(val);   //5
        return val + 5;
    })
    .then((val) => console.log(val));  //10

//first then recieves promise of 5 
// It return promise of 5+5=10
//last then prints the value now





// Q10. Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);   //Fail
        return "Recovered";
    })
    .then((res) => console.log(res));  //Recovered
    

// if then is after catch and chach run at that time retun of catch is reciever as promise to then 





// Q11. The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

//Output: A E C D B
//Priority: Execution stack-> microtask-> macrotask
//A, E are from execution stack
//B goes to macrotask queue
// C, D goes to microtask
//First microtask called and c executed then .then goes to microtask
//But as microtask has higher priority it is consumed before macrotask




// Q12. Explicit Binding (Call/Apply)========================================================================================

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);
showId.apply(null);

// apply(null) sets this = null
// But in non-strict mode, JavaScript replaces: null or undefined to global object (window/global)
// call(agent) explicitly binds this to agent, so it prints 101.





// Q13. Promise.all Failure

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));

//.all takes all promises and process parellely
//finds first error and and gives in catch




// Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);   //undefined
        }, 100);
    }
};

player.updateScore();

// window.score doesn't exist so undefined
//setTimeout(fn) calls fn(), not player.fn() so context lost.




// Q15. Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));
    
//Throwing inside .then() automatically converts the promise into a rejected promise.





// Q16. Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");

//Output: C A D B
//c
//then foo called
//in foo as it is async then A runs
//await function pauses to microtask
//D runs
// stack empty
//microtask called and B runs





// Q17. The "Finally" Gotcha

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));
// Output: 
// cleanup
// Done

// finally runs regardless of success or failure.
// .finally() ignores any return value.
//hence then take resolve Done





// Q18. Variable Hoisting & Promises

console.log(a);  //undefined
//hoisted but not initialized yet
var a = 5;

Promise.resolve().then(() => {
    console.log(a);  //10
    // promise goes to micro task rest of the code runs normally and a is modified and when promise come backs to run a is modified
});

a = 10;






// Q19. Microtask vs Macrotask Interleaving

setTimeout(() => console.log("T1"), 0); //goes to macrotask queue

Promise.resolve().then(() => {
    console.log("P1"); //goes to micro task 
    setTimeout(() => console.log("T2"), 0); // goes to macrotask
});

Promise.resolve().then(() => console.log("P2")); // goes to microtask

console.log("End"); // in main stack

//Output: End P1 P2 T1 T2
// Priority: main stack-> microtask queue -> macrotask queue




// Q20. Object Method Assigned to Class

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();

//Output: sarah
//print is not prototype method
// Normally extracting a method loses this, but since print is an arrow function, it lexically binds this to the instance, so it still prints "Sarah"
