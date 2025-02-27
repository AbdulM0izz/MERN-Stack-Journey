let obj = {
    age: 10,
    ht: 9,
    wt: 90,
};

let desc = Object.assign({}, obj);
console.log(obj);
console.log(desc);

console.log(obj);

obj.color = "green"; // initializing new property in obj
console.log(obj);

let src = {...obj };

console.log(src);