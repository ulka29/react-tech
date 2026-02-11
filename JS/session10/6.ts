// Assignment 6: Interfaces
//1. Create Admin and Customer interfaces using a common base
//2. Extend the base interface to add role-specific properties

interface baseUser{
    id:number;
    name:string;
    email:string;
}
interface Admin extends baseUser{
    role:"Admin";
    permissions: string[];
}

interface Customer extends baseUser{
    role:"Customer";
    purchase: number[];
}


//3. Write a function that accepts BaseUser
//4. Pass both Admin and Customer objects to the function
function printUser(user:baseUser){
    console.log(user.name, user.id)
}
let admin1 : Admin={
    id:2,
    name:"xxx",
    email:"adf@fs",
    role:"Admin",
    permissions:["insert", "update"]
}
let customer1 : Customer={
    id:2,
    name:"xxx",
    email:"adf@fs",
    role:"Customer",
    purchase:[1,2]
}
printUser(admin1)
printUser(customer1)

//5. Design an interface for an API response object
//6. Create a function that accepts this interface as a parameter
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
function handleResponse<T>(response: ApiResponse<T>) {
  if (response.success) {
    console.log(response.data);
  } else {
    console.log(response.message);
  }
}

const res: ApiResponse<number[]> = {
  success: true,
  data: [20,30]
};
handleResponse<number[]>(res)

// Generic <T> data can be ANY type, decided later
//     T = User
//     T = Product
//     T = string[]
//     T = number
// ? means optional
// ApiResponse<number[]> :For this call, T = number[]

//7. Extend the interface and reuse it
interface PaginatedResponse<T> extends ApiResponse<T> {
  total: number;
  page: number;
}
const usersResponse: PaginatedResponse<number[]> = {
  success: true,
  data: [20,30],
  total: 1,
  page: 1
};

//8. Create an interface for a Product
//9. Create a variable that follows this interface

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const laptop: Product = {
  id: 362,
  name: "Dell",
  price: 60000,
  stock: 5
};
//10. Why are interfaces preferred in large projects?

// better readability
// supports opps like structure 
// supports declaration merging