// Assignment 5: Type Aliases

type OrderBase = {
  orderId: number;
  amount: number;
};

type Auditable = {
  createdAt: Date;
  createdBy: string;
};

//1. Create reusable aliases for union and intersection types
type data = OrderBase | Auditable;
let data1: data;

//2. Refactor earlier assignments to use these aliases
type Order = OrderBase & Auditable;

//3. Observe how readability improves
// with alias now we can use shorthand names instead of bit type declaratiob

//4. Create a type alias for string | number
type StringOrNumber = string | number;
let userId: StringOrNumber;
let orderId: StringOrNumber;

//5. Use it in two variables
userId = "U101";
orderId = 5001;
//6. How does this improve readability?

// Without alias
//     let userId: string | number;
//     let orderId: string | number;
//     let productId: string | number;
//     let paymentId: string | number;
// Repeating again and again.