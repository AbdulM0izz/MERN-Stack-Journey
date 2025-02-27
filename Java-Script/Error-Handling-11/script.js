// compile time error // we can say syntax error in the code

// console.log(i  ;  // this is syntax error 

// Run time  error
// reference error
// console.log(x); //this is run time error cuz we didnt define x

// Error Handling

try {
    console.log("Try block");
    console.log(x);
} catch (e) {
    throw new Error("Define kro x ");
} finally {
    console.log("Final");
}

let error = 100;

if (error == 100) {
    throw new Error("Invalid json");
}