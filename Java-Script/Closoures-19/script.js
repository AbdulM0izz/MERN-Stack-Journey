// Clousers

let outerfun = () => {
    let name = "Moiz";
    let innerfun = () => { // this fun is bounded with it required data eg name;
        console.log(name);
    }
    return innerfun;
}

let inner = outerfun(); // in inner ref o innerfun is stored ;

inner();