// Problem 1: Variable Scope & Hoisting (var, let, const)
// Question: Predict the output of the following code and explain why it behaves that way.

console.log(a);

var a = 10;

if (true) {
  let a = 20;
  console.log(a);
}

console.log(a);

//Output: undefined 20 10
// concept used:
// var is fully hoisted and in GEC
// let and const are blockscoped
// now a is used before initialization but as all initialization goes to top it inialized with an undefined value 
// now as in block scope it is written it uses concept of shadowing and shadows outer value
// but that scope destroys with block and 10 is printed