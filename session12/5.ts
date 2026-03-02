// Assignment 5
// Create a constructor type for UserRepository .

class UserRepository {}

type UserRepositoryConstructor =
  new (...args: any[]) => UserRepository

// Create a callable type that formats User name.


interface User {
  id: string
  name: string
  email: string
  role: "ADMIN" | "CUSTOMER"
  isActive: boolean
}

const user1: User = {
    id:"1",
    name:"Ulka",
    email:"ulka@gmail.com",
    role: "ADMIN",
    isActive: true,
}


type UserNameFormatter = {
  (user: User): string
}

const newName: UserNameFormatter = (user) => user.name.toUpperCase()
console.log(newName(user1))