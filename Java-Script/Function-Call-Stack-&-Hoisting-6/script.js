//Function hoisting means in his current scope function move to thr top and if we call anywhere in the program it is execute;

// callname("Moiz"); // as well it will also execute; 
function callname(finalname) {
    console.log(finalname);
}

// callname("Moiz"); // if i call here it will execute;

//if i use function expression method it will also throw error eg

// let name = function() {

// }

// Variable hoisting Var keyword;

// console.log(value); // but if i call here it will show undefined cuz just declearion move to the top
var value = 10;
// console.log(value); // if i call after declration it will execute perfectly;


// If we use let or const keyword


// console.log(num); // but if call above the initialization it will throw error;
let num = 10;
// console.log(num); // it will ececute perfectly


// Function call stack;

//fun first call citizens
// assign to variable


let greet = function() {
    console.log("Hello");
}

greet();

// call function in another fun
function greet2(greet, fullname) {
    console.log("Hello", fullname);
    greet();
}

greet2(greet, "Moiz");

//fun return fun

function sum(num) {
    return function(num) {
        return num * num;
    }
}
let ans = sum();
let final = ans(2);
console.log(final);


//fun in array

let arr = [
    function(a, b) {
        return a + b;
    },
];

let fun1 = arr[0];
let ans = fun1(2, 2);
console.log(ans);

//fun in obj

let obj = {
    name: "moiz",
    age: 18,
    greet: () => {
        console.log("Hello Duniya");
    }
}
console.log(obj.name);
console.log(obj.greet());