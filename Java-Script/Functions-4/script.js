//Basic syntax defination
function name() {
    console.log("MOiz");
}
call

function
name();


//funtion to print counting
function count() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
count();

//parameter fun

function printnum(num) {
    console.log("Printng Num", num);
}
printnum(5);

function average(num1, num2) {
    let average = (num1 + num2) / 2;
    console.log(average);
}

average(3, 70);

//Return function
function getsum(a, b, c) {
    let sum = a + b + c;
    return sum;
}

let ans = getsum(1, 2, 3);
console.log(ans);

function getname(firstname, lastname) {
    let fullname = firstname + " " + lastname;
    return fullname;
}

let name = getname("Abdul", "Moiz");
console.log(name);

//function expression

let getmult = function(a, b) {
    return a * b;
}

let ans = getmult(2, 2);
console.log(ans);

// Arrow functios
let exp = (x, y) => {
    let ans = x ** y;
    return ans;
}

console.log(exp(2, 10));