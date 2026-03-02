// Assignment 1
interface User {
  id: string
  name: string
  email: string
  role: "ADMIN" | "CUSTOMER"
  isActive: boolean
}

// Create a type IsNumber<T> .
type IsNumber<T> = T extends number ? true : false

// Create a type ExtractEmail<T> that extracts email type if present.
type ExtractEmail<T> = T extends {email:infer U}? U: never
type EmailType = ExtractEmail<User>  // string
