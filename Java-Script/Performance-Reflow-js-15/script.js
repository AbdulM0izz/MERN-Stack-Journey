// CODE 1: 100 para in ui

const t1 = performance.now();

for (let i = 0; i < 100; i++) {
    let para = document.createElement('p');
    para.textContent = "Moiz";
    document.body.appendChild(para);
}

const t2 = performance.now();
console.log("this of code one" + (t2 - t1));


//CODE 2 // this code is faster then code 1
let t3 = performance.now();

let mydiv = document.createElement('div');

for (let i = 0; i < 100; i++) {
    let para = document.createElement('p');
    para.textContent = "ali";
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

let t4 = performance.now();

console.log("this of code two" + (t4 - t3));

// best code

let fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "para" + i;
    fragment.appendChild(para);
}

//and add this fragment to the orignal document 

document.body.appendChild(fragment); // 1 reflow 1 repaint