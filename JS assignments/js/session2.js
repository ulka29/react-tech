// Assignmet-1
console.log("Assignmet-1: ");
function numberCkeck(num) {
    if(num>0){
        console.log("Positive");
    }
    else if(num<0){
        console.log("Negetive");
    }
    else{
        console.log("Zero");
    }
    return 0;
}

let a=2;
numberCkeck(a);

// here:
//     a is Argument
//     num is parameter which is placeholder
//     Function Declaration is used which is hoisted
//     if else control flow is used

// Assignmet-2
console.log("Assignmet-2: ");
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i +" even");
    }
    else{
        console.log(i +" odd");
    }

}



// Assignmet-3
console.log("Assignmet-3: ");

let role="admin";
switch(role){
    case "ADMIN": console.log("Full access")
        break;
    case "USER": console.log("Limited access")
        break;
    case "MANAGER": console.log("Moderate access")
        break;
    default:
        console.log("Invalid role")    
}


// Assignmet-4
console.log("Assignmet-4: ");

function calculateTotalPrice(price, quantity){
    let ans=price*quantity;
    return ans;
}
console.log(calculateTotalPrice(150,4));



// Assignmet-5
console.log("Assignmet-5: ");

function applyCoupon(amount, couponCode){
    let ans;
    if(couponCode=="SAVE10"){
        ans=amount- (amount*10/100);
    }
    else if(couponCode=="SAVE20"){
        ans=amount- (amount*20/100);
    }
    if(couponCode=="NONE"){
        ans=amount;
    }
    return ans;
}
console.log(applyCoupon(2000,"SAVE20"));
