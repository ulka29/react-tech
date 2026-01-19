//operators
let a=6;
let b=3;
console.log("a and b are "+a+" and "+b);
console.log("add:"+(a+b));
console.log("sub:"+(a-b));
console.log("mul:"+(a*b));
console.log("div:"+(a/b));
console.log("modulus(when a is divided by b then remender):"+(a%b));
console.log("power:"+(a**b));

console.log("unary operator with a");
console.log("increment:"+ (a++));
console.log("decrement:"+(a--));


let x=5;
let y="5"
let z=7;
console.log("------------Comparision------------");
console.log("x=5 and y=string 5 z=7 ");
console.log("x==y:"+(x==y));
console.log("x!=y:"+(x!=y));
console.log("x===y:"+(x===y));
console.log("x>=z:"+(x>=z));
console.log("(x==a) && (z==b)"+((x==a) && (z==b)) );
console.log("(x==a) || (z==7)"+((x==a) || (z==7)) );



console.log("------------Conditions------------");

let age=3;
if(age<=18){
    console.log("Minor");
}
else if(age>18 && age<=60){
    console.log("Adult");
}
else{
    console.log("senior citizen");
}

console.log("ternary operator:");
age>18 ? console.log("adult") : console.log("not adult") ;


console.log("Switch:");
switch(age){
    case age>=18: console.log("Adult:");
    break;
    default: console.log("minor:");
}



//loops
console.log("------------loops------------")
for(let i=0;i<5;i++){
    console.log(i);
}
console.log("while loop:")
let i=0;
while(i<5){
    console.log(i);
    i++;
}
console.log("do while loop:")
do{
    console.log(i);
    i++;
}
while(i<5)

console.log("for of loop: used for string")
let strval="ulka";
for(let i of strval){
    console.log(i);
}
console.log("for in loop: to iterate object")

let student = {
    name:"ulka",
    age:22,
    cgpa:9,
    isPass:true
};
for(let i in student){
    console.log("keys: "+ i + " value: "+ student[i]);
}




console.log("------------String------------")
str="   Hello JavaScript";
console.log("String:" + str);
console.log("length:"+ str.length);
console.log("str.toUpperCase():"+ str.toUpperCase());
console.log("str.toUpperCase():"+ str.toLowerCase());
console.log("str.trim():remove whitespace "+ str.trim());
console.log("str.slice(2,5):"+ str.slice(2,5));
console.log("str.replace(H,2):"+ str.replace("H",2));
console.log("str.charAt(3):"+ str.charAt(3));
str.slice(2,5);
str.replace("H",2);
str.charAt(3);
console.log("str[5]:"+ str[4]);


console.log("combining with template literal");
console.log(`the studet obj has age ${student.age}`)




console.log("------------Arrays------------")
arr = [11,"age",22,33,44];

console.log("arr.length: ",arr.length)
console.log("typeof(arr): ",typeof(arr));

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}


console.log("------------Arrays Methods------------")
console.log("arr.push(10)")
arr.push(10);
for(let i of arr){
    console.log(i)
}
arr.pop()
console.log("arr.pop()")
for(let i of arr){
    console.log(i)
}
console.log(arr.toString());

console.log("arr.concat([2,3,4])",arr.concat([2,3,4])) ;

console.log("arr.shift():",arr.shift(),arr) ;
console.log("arr.unshift(abd)",arr.unshift("abd"),arr);