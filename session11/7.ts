// Assignment 7
type User = {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "CUSTOMER";
    isActive: boolean
}
// Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
type ReadonlyByKeys<T, K extends keyof T> =
  Omit<T, K> & {
    readonly [P in K]: T[P];
  };

type UserReadonlyIdAndEmail = ReadonlyByKeys<User, "id" | "email">;

const user1: UserReadonlyIdAndEmail = {
  id: "1",
  name: "Ulka",
  email: "ulka@gmail.com",
  role: "ADMIN",
  isActive: true
};

user1.name = "New Name";   // workerStart
// Error
// user1.id = "2";            
// user1.email = "new@gfail.com"; 




// Create a utility NonNullableFields<T> that removes null and undefined from all properties.

type NonNullableFields<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

type NewUser = {
  id: string | null;
  name: string | undefined;
  email: string | null;
  role: "ADMIN" | "CUSTOMER" | null;
  isActive: boolean | null;
};

type CleanUser = NonNullableFields<NewUser>;
const user2: CleanUser = {
  id: null,   // Error
  name: "Ulka",
  email: "ulka@test.com",
  role: "ADMIN",
  isActive: true
};