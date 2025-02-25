//Obj in java-script

// let Obj = {
//     name: "Moiz",
//     age: 25,
//     height: 6,
//     greet: function() {
//         console.log("hello word");
//     }
// };



//calling fun of the obj
// Obj.greet();

// printing type of the obj
// console.log(typeof(Obj))

//Arrays

let arr = [1, 2, 3, 4, 1];
// console.log(arr[2]);

//array constructor syntax
let brr = new Array("moiz", 1, 3, "ali")

//push at right most side
brr.push("Moiz");

// removing last element
brr.pop();

//remove first element
// brr.shift();

// add element at first or left most
// brr.unshift("First");

// brr.push(20, 30, 40);

//part of the array and last element will not be included
// console.log(brr.slice(2, 5))

//replace content 
//means 1 index say 3 value remove kro or done dalo
// brr.splice(1, 3, "Done");

// console.log(brr)

//map function

let arr2 = [2, 4, 5, 10, 20, 30, 40];
// map give square of this array
// let ansarray = arr2.map((Number) => {
//     return Number * Number;
// })

// console.log(ansarray);

// arr2.map((Number) => {
//     console.log(Number + 1);
// })

// fiter
// let arr3 = [2, 4, 5, 10, 20, 30, 40];

// let ans3 = arr3.filter((number) => {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// })
// console.log(ans3);


// let arr4 = [1, 2, "moiz", "ali"];

// let ans = arr4.filter((value) => {
//     if (typeof(value) === 'number') {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(ans);

//use of reduce

let arr0 = [30, 89, 90, 50, 40, 10];
arr0.sort();
arr0.reverse();
console.log(arr0);