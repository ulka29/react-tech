// Assignment 4
// Create abstract class Service<T> with abstract method execute() .
// Extend it with UserService .

interface User {
  id: string
  name: string
  email: string
  role: "ADMIN" | "CUSTOMER"
  isActive: boolean
}

abstract class Service<T> {
  abstract execute(): T
}

class UserService extends Service<User> {
  execute(): User {
    return {
      id: "1",
      name: "Ulka",
      email: "ulka@gmail.com",
      role: "ADMIN",
      isActive: true
    }
  }
}