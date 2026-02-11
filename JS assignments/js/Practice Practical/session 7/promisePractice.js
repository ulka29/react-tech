//promise
//basic promise
console.log("start");
const promiseOne = new Promise((resolve, reject) => {
    console.log("Executor runs immediately");
});
console.log("end");
console.log("+=====================================================================================");

//detailed promise with whole flow

console.log("Detailed Promise SCRIPT START");

const p = new Promise((resolve, reject) => {
    console.log("PROMISE EXECUTOR START");
    console.log("In next line settimeout is called");

    setTimeout(() => {
        console.log("TIMEOUT CALLBACK START");

        const success = false;

        if (success) {
            console.log("CALLING resolve('OK') inside timeOut");
            resolve("OK");
        } else {
            console.log("CALLING reject('ERROR') inside timeout");
            reject("ERROR");
        }

        console.log("TIMEOUT CALLBACK END");
    }, 1000);

    console.log("PROMISE EXECUTOR END");
});

p.then((resolveData) => {
    console.log("THEN CALLBACK RUNS For Resolve");
    console.log("DATA RECEIVED IN THEN: ", resolveData);
    console.log("we put return value Next value: ");
    return "NEXT VALUE";
},
(rejectData) => {
    console.log("THEN CALLBACK RUNS For Reject");
    console.log("DATA RECEIVED IN THEN: ", rejectData);
    console.log("we put return value Next value: ");
    return "NEXT VALUE";
})
.then((nextData) => {
    console.log("SECOND THEN RUNS");
    console.log("DATA Resieved in second then THEN:", nextData);
})
.catch((err) => {
    console.log("CATCH RUNS:", err);
});

console.log("SCRIPT END");
