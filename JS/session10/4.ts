// Assignment 4: Intersection Types
// 1. Create an Order using intersection ( & )
type OrderBase = {
    orderId : number;
    amount : number
}
type Audittable={
    createdAt : Date;
    createdBy : string;
}
type Order = OrderBase & Audittable;


// 2. Create the same model using interfaces and extends
interface OrderBase1{
    orderId : number;
    amount : number
}
interface Audittable1 extends OrderBase1{
    createdAt : Date;
    createdBy : string;
}

// 3. Remove one required property and observe the compiler error
const order: Order = {
  orderId: 1,
  amount: 500,
  createdAt: new Date()
};

// Error:   Property 'createdBy' is missing in type '{ orderId: number; amount: number; createdAt: Date; }' but required in type 'Audittable'.
// Why :Because intersection means must satisfy BOTH types fully

// 4. Decide which approach feels clearer and why
// interface is oop like structure and more readable then &

// 5. Create two small object types and combine them using intersection ( & )
type Contact = {
  email: string;
  phone: string;
};

type Address = {
  city: string;
  country: string;
};

type UserProfile = Contact & Address;
const user: UserProfile = {
  email: "ulka@gmail.com",
  phone: "9999999999",
  city: "Ahmedabad",
  country: "India"
};

// 6. Create the same structure using interfaces and extends
interface Contact1 {
  email: string;
  phone: string;
}

interface Address1 {
  city: string;
  country: string;
}
interface UserProfile1 extends Contact1, Address1 {}


// 7. Try removing a required property and observe the compiler error
const user: UserProfile = {
  email: "ulka@gmail.com",
  city: "Ahmedabad",
  country: "India"
};


// 8. Identify when intersection is better than union

// Use intersection when: you need EVERYTHING
// Use union when: you choose ONE

// Examples:
// success OR error
// admin OR user
// loading OR success
// card OR UPI