// Assignment 2

// Create FirstArgument<T> to extract first parameter type.
type FirstArgument<T> =
  T extends (arg1: infer A, ...args: any[]) => any ? A : never

// Test it with a function that takes (id: string, active: boolean)
function example(id: string, active: boolean):void {}
type First = FirstArgument<typeof example>  // string

// Works
const id1 : First = "2"
// Error
// const id2 : First = 2