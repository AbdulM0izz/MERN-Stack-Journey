// //for loop
//reverse loop
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

//for forward loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//use of break in fo loop
for (let a = 1; a <= 9; a++) {
    if (a == 3) {
        break;
    } else {
        console.log(a);
    }
}
console.log(" ");
// use of continue in for
for (let c = 1; c <= 5; c++) {
    if (c == 3) {
        continue;
    } else {
        console.log(c);
    }
}

//while loop
console.log(" ");

let f = 1;
while (f <= 5) {
    console.log("While loop");
    f++;
}

do -
    while
console.log(" ");

let z = 1;
do {
    console.log(i);
    z++;
} while (z < 4);

// back tick string to print in next line ~

let name = `Abdul 
Moiz`;

console.log(name);

strings
concatenate string means to combine strings
let opi1 = 'English ';

let opi2 = 'Urdu ';

let ans = opi1 + opi2;
console.log(ans);

concatenate or combine by template literals
let opi1 = 'English ';

let opi2 = 'Urdu ';

let finalans = `${opi1}${opi2}`;

console.log(finalans);