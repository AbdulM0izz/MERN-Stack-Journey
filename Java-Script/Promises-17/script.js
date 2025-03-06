// first promise 

// let firstpromise = new Promise((resolve, reject) => {
//     console.log("moiz"); //sync code
//     // reject("dbms error");
// });

//async code promise



// let newpromise = new Promise((resolve, reject) => {

//     setTimeout(function sayname() {
//         console.log("moiz");
//     }, 2000);
//     resolve(1);

// });


let promise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve(" Fullfilled");
    } else {
        reject("failed");
    }
});
// if promise resolve then will execute else catch will ;
promise.then((message) => {
    console.log("then message" + message);
    return "second message ";
}).then((message) => { // we can usemultiple then block 
    console.log(" second then message = " + message);
}).catch((error) => {
    console.log("error message = " + error);
    // console.error(error);
});