//first event add on paragraph
function changetext() {
    // console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Abdul moiz";
    fpara.style.background = ("Blue");
}
let fpara = document.getElementById('fpara');

fpara.addEventListener('click', changetext);

//changing default behaviour  
let fancor = document.getElementById('fancor');

fancor.addEventListener('click', function(event) {
    event.preventDefault();
    fancor.textContent = "Done";
});


//alert
//method one
let paras = document.querySelectorAll('p');

function clickevent(event) {
    alert("Clicked on para" + event.target.textContent);

}
for (let i = 0; i < paras.length; i++) {
    let para = paras[i];
    para.addEventListener('click', clickevent);
}

//method two

let mydiv = document.getElementById('pdiv');

function clickalert(event) {
    alert("clicked on para" + event.target.textContent);
}

mydiv.addEventListener('click', clickalert);