// Assignment 6

type User = {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "CUSTOMER";
    isActive: boolean
}
// Create a type UserPublicProfile without email and isActive .
type UserPublicProfile=Omit<User,"email" | "isActive">
const userPublicProfile: UserPublicProfile={
    id:"3",
    name:"ulka",
    role: "ADMIN",
}
console.log(userPublicProfile)





// Create a Record that maps user IDs (string) to User objects.
type UsersRecord = Record<User["id"],User>
const usersRecord: UsersRecord = {
    "1": {
        id: "1",
        name: "Ulka",
        email: "ulka@test.com",
        role: "ADMIN",
        isActive: true,
    },
  "2": {
        id: "2",
        name: "Rahul",
        email: "rahul@test.com",
        role: "CUSTOMER",
        isActive: false,
    }
}

console.log(usersRecord)