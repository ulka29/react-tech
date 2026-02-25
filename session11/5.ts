// Assignment 5

// Create a type ReadOnlyUser where all properties are readonly.
type User = {
    id:number,
    name:string,
    isActive : boolean,
}

type ReadOnlyUser={
    readonly [K in keyof User] : User[K]
}
let readOnlyUser: ReadOnlyUser = {
    id:1,
    name:"Ulka",
    isActive:true,
}
// It will give error as readonly
// readOnlyUser.id=2
console.log(readOnlyUser)





// Create a type StringifiedUser where all properties become string.
type StringifiedUser={
    [K in keyof User] : string;
}
const stringifiedUser: StringifiedUser={
    id:"2",
    name:"ulka",
    isActive:"true",
}
console.log(stringifiedUser)





// Create a type OptionalAndNullableUser where all properties are optional and nullable.
type OptionalAndNullableUser={
    [K in keyof User] ?: User[K] | null;
}
const optionalAndNullableUser: OptionalAndNullableUser={
    name:null,
}
console.log(optionalAndNullableUser)