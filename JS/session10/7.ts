// Assignment 7: Enums



//1. Create an enum for payment states (INITIATED, SUCCESS, FAILED)
//2. Write a function that accepts only this enum

enum paymentStatus{
    Initiate="INITIATED",
    Success="SUCCESS",
    Failed="FAILED"
}
function paymentUpdate(status:paymentStatus){
    console.log("status: ",status);
}
paymentUpdate(paymentStatus.Initiate);





//3. Try passing an invalid value and observe the error
paymentUpdate(paymentStatus.Initiated);   
//Error : Property 'Initiated' does not exist on type 'typeof paymentStatus'.






//4. Why enums are better than magic strings?

// option of enum : Union of string literals
// What is a Magic String? A hard-coded string written directly in logic.
//     if (role === "admin") {
//     deleteUser();
//     }
// Problems with Magic Strings
// 1. Typos not caught: if (role === "admn")   // ❌ bug
//     JS runs fine -> but logic breaks.
// 2. No autocomplete: You must remember
// 3. Hard to refactor 
//     If you change: admin → superadmin You must search everywhere manually.
// 4. No central source of truth Strings scattered across files.