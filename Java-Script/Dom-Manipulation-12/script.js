//access the html tag 

//html file is document

// document.getElementById("fpara");

//access by class 
// document.getElementsByClassName("ch");

//access by tag name
// document.getElementsByTagName("h2");

// method to add new elemeny by insertAdjacentElement;

let mydiv = document.querySelector('#mydiv');

let newelement = document.createElement('span');

newelement.textContent = "new element";
mydiv.insertAdjacentElement('afterend', newelement);


// remove element
// first need parent

let parent = document.querySelector('#mydiv');
let child = document.querySelector('#fpara');

parent.removeChild(child);