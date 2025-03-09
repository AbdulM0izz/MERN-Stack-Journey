// syntax of async function

// async function getdata() {

//     setTimeout(function() {
//         console.log("in time out block");
//     }, 3000);

// }
// getdata();


// fetch api ( get request using fetch api)


async function getdata() {
    //get request == asyn operation
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');


    // data parsing or converting in json form => is also asyn operation  we use await
    let data = await response.json();

    console.log(data);
}
getdata();