class human {
    age = 90;
    ht = 8;
    wt = 50;

    constructor(newage) { // to change the age
        this.age = newage;
    }

}

let obj = new human(90); // this value will go in constructor

console.log(obj.age); //accessing the class member


//Default Paramters

function sayname(myname = "Ali", lname = "mobi") { //this ali is default parameter
    console.log("My name is", myname, lname);
}
sayname("Moiz", "Ali"); //if ill not give this argument default will print in console

//Default dependent parameters

function name(fname = "MOIZ", lname = fname.toUpperCase()) {
    console.log(fname, lname);
}

name("MOIZ");

//default paramter by obj

function solve(val = { name: "moiz", lname: "abdul", ht: 20 }) {
    console.log(val);
}

solve();

//default paramter in fun 

function getage() {
    return 190;
}

function utility(name, age = getage()) {
    console.log(name, age);

}
utility("ali")