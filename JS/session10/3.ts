
// Assignment 3: Union Types

// Union types let a variable hold multiple possible types.
// syntax: type A | B ;  let id: string | number;
// You can only use methods common to ALL types in the union.
// Solution : Type Narrowing

let values: string | number;
// values = 10;   TS will automatically know it is number
values = Math.random() > 0.5 ? "hello" : 10;
if (typeof values === "string") {
   values.toUpperCase();
}

if (typeof values === "number") {
  values.toFixed(2);
}

// Real World Use Cases
// 1️. API status
type Status = "loading" | "success" | "error";
// 2️. Nullable values
let names: string | null;
// 3️. Input types
function search(q: string | number) {}
// 4️. React props
type ButtonSize = "small" | "medium" | "large";






// Objects
type Admin = {
    role : 'admin';
    permissions: string[];
}

type Customer = {
    role : 'customer';
    perchaseHistory: number[];
}

    // 1. Add one more role (e.g. Guest ) to the User union
    // 2. Write a function that accepts User
    // 3. Use the role field to safely narrow the type
    // 4. Observe how TypeScript prevents invalid property access
    
type Guest = {
    role : 'guest';
}

type User = Admin | Customer| Guest;

function dashboard (user:User):void{
    if(user.role=='admin'){
        console.log("Permissions are",user.permissions)
    }
    else if(user.role=='customer'){
        console.log("Perchase History is",user.perchaseHistory)
    }
    else if(user.role=='guest'){
        console.log("welcome guest")
    }
    else{
        console.log("invalid")
    }
}


let xyz : Admin = {
    role: 'admin',
    permissions:["insert","Update"]
}
let per2 :  User = {
    role: 'customer',
    perchaseHistory:[10,20]
}

dashboard(xyz)
dashboard(per2)
dashboard({
    role: 'guest'
})
// dashboard({
//     role: 'hacker'
// })









    // 5. Create a union type for two different user roles using type
type Student = {
  role: "student";
  name: string;
  marks: number;
};

type Teacher = {
  role: "teacher";
  name: string;
  subject: string;
};
type Person = Student | Teacher;

    // 6. Create another union using two interfaces
interface Dog {
  type: "dog";
  breed: string;
}

interface Cat {
  type: "cat";
  livesLeft: number;
}
type Pet = Dog | Cat;




    // 7. Write a function that accepts the union and narrows the type safely

function printInfo(person: Person):void {
  if (person.role === "student") {
    console.log("Marks:", person.marks);
  } else {
    console.log("Subject:", person.subject);
  }
}

let person1 : Person = {
  role: "student",
  name: "Ulka",
  marks: 90
}
let person2 : Person = {
  role: "teacher",
  name: "Dr. Rao",
  subject: "Math"
}

printInfo(person1);
printInfo(person2);

function petInfo(pet: Pet):void {
  if (pet.type === "dog") {
    console.log("Breed:", pet.breed);
  } else {
    console.log("Lives left:", pet.livesLeft);
  }
}
let pet1 : Pet = { type: "dog", breed: "Labrador" }
let pet2 : Pet = { type: "cat", livesLeft: 7 }
petInfo(pet1);
petInfo(pet2);



// we can do everything in plain JavaScript.
// But:
// JS finds bugs at runtime
// TS finds bugs at compile time (before running)