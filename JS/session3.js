//Excersise:1
const input1="JavaScript For Beginners";
const output1=input1.toLowerCase().split(" ").join("-");
console.log(output1);



//Excersise:1
const input2=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output2=input2.slice(3,6);
console.log(output2);


//Exercise 3: The Price Formatter

const input3=[10, 20, 30];
const output3=input3.map((x)=>"$"+x);
console.log(output3);

//Exercise 4: The Clean-Up Crew

const input4=[25, -5, 18, 0, 40];
const output4=input4.filter((x)=>{
    if(x>0)return true;
    else return false;
});
console.log(output4);

//Exercise 5: The "One-Liner" Chain

const input5=[-10, 20, 50, -5];
const output5=input5.filter((x)=>{
    if(x>0)return true;
    else return false;
}).map((x)=>x*2);
console.log(output5);


//Exercise 6: The Shopping Cart
const input6=[100, 200, 50];
const output6=input6.reduce((acc,curr)=>{
    acc=acc+curr;
    return acc;
});
console.log(output6);





// Exercise 7: The "this" Detective
// Scenario: The code below is broken (it logs undefined).
// Explain why it fails.
// it fails because it is a arrow function and arrow takes this from its parent .which here is global
//we can solve it with
//a) wrapping arraow in a function
//b)making greet a function statement
//c) writing variable in global space.

// Fix it so it logs "Hello, Alex".

// name="abc";
const user = {
    name: "Alex",
    greet(){
        console.log("Hello, " + this.name);
    }
};
user.greet();


//Exercise 8: The Safe Update
const settings = { theme: "light", notifications: true };
const newSettings = {
    ...settings
}
newSettings.theme="dark";
console.log(settings);
console.log(newSettings);





// Exercise 9
// Combine everything you learned into one function.

const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

const output=inventory.filter((x)=>{
    if(x.stock>0){
        return true;
    }
    else{
        return false;
    }
}).map((x)=>{
    let val=x.price*x.stock;
    return val;
}).reduce((acc,curr)=>{
    acc=acc+curr;
    return acc;
});
console.log(output)





//
const users=[{
    id: 1,
    name: "ulka",
    
},{
    id: 2,
    name: "xyz",
    email: "xyz@gmail.com",
},{
    id: 3,
    name: "abc",
    
}]


const cleanUpUsers = (users) => {

console.log("Processing...");
return users
.filter(user => !user.email)

.map(user => ({
    //...user first adds element of user object
...user,
status: 'active'

}));

// Expected Result:

// [{ id: 1, email: '', status: 'active' }]

};
const ans=cleanUpUsers(users);
console.log(ans);
console.log(users);






arr=[1,2,3,4,5];
const useMap= arr.map((x)=>{
    return x*2;
})
const useFilter=arr.filter((x)=>{
    if(x>3){
        return true;
    }
    else{
        return false;
    }
})

const useReduce= arr.reduce((acc,curr)=>{
    acc=acc+curr;
    return acc;
},0)

console.log(useMap);
console.log(useFilter);
console.log(useReduce);
console.log(arr);
