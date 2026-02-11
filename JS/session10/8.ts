// Assignment 8: Typed Functions
// 1. Write a function with required and optional parameters
// 2. Define return types explicitly
function user(id:number,name:string,email?:string): boolean{
    console.log(id,name,email);
    return true;
}

// 3. Create a small utility function that would exist in a real project
function formatName(fisrtName: String, salutation: string = "Mr / Mrs"): string {
  return salutation+" "+fisrtName;
}

console.log(formatName("Ulka"));        // "Mr / Mrs Ulka"
console.log(formatName("Ulka", "Miss"));  // "Miss Ulka"



// 4. Write a function with one required and one optional parameter
// 5. Call it with and without the optional argument
function fullName(fisrtName:string,lastname?:string){
    console.log(fisrtName," ",lastname);
}
fullName("Ulka")
fullName("Ulka","Patel")
// 6. How does TypeScript enforce correctness here?

// TypeScript enforces correctness by:
    // checking argument count
    // checking argument types
    // checking return type
    // preventing wrong order of optional params (Optional parameters must be after required ones)
    // catching bugs at compile time