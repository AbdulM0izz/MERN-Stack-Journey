let time = () => { // it is asyncronic code cuz execution is not on the spot
    console.log("hello");
}

// setTimeout(time, 5000);

console.log("start");

setTimeout(time, 1000); // this is async code;

console.log("end");