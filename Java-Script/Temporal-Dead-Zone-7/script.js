//gloabal scope it can be use anywhere in the program
let age = 15;

console.log(age);

for (let i = 0; i <= 2; i++) {
    console.log(age);
}

function sayhello() {
    console.log(age);
}
sayhello();

// Function scopeing 
function sayhi() {
    let height = 6;
    console.log("Moiz", age);
}
sayhi();
// console.log(height); // if we call height seperately it will throw error because of block scope


//Block scope
{
    var wht = 80; //now this is gloabal scope because of var keyword
    console.log(wht);
}
console.log(wht); //this will print as well here

//Temporal dead zone 

console.log("ali"); //from here 
console.log(name);
let name = "Moiz"; //to here This is temporal dead zone cuz we cant access the variable
console.log(name);