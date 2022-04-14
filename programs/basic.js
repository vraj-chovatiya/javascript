// using getElementById selector

// const mainheading = document.getElementById("main-heading");
// console.log(mainheading);




// using queryselector
// const mainheading = document.querySelector("#main-heading");
// const header = document.querySelector(".header");
// const container = document.querySelector(".container"); // multiple class ne select karyu hoy to first class jene apyo hoy ae j print thay. and badha class ne access karva hoy to "querySelectorAll" method use thay.
// console.log(mainheading);
// console.log(header);
// console.log(container);




// change text
// textcontent and innertext

// const heading = document.getElementById("main-heading");
// console.log(heading.textContent);
// heading.textContent = "this is something else";
// console.log(heading.textContent);



// change the styles of Elements 

// const m_heading = document.querySelector("div.headline h2");
// console.log(m_heading.style);
// m_heading.style.color = "#fff";
// m_heading.style.backgroundColor = "blue";
// m_heading.style.padding = "10px";
// m_heading.style.border  = "3px solid green";




// get and set attribute
// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href", "https://codeprog.com");
// console.log(link.getAttribute("href"));


// const input = document.querySelector(".form-todo input");
// console.log(input.getAttribute("type"));





// get multiple elements using getElements by class name
// get multiple items using querySelector

// const navitems = document.getElementsByClassName("nav-item");  // html collection
// console.log(typeof navitems);
// console.log(Array.isArray(navitems));   // check navitems is a array like object or not! 

// const navitem = document.querySelectorAll(".nav-item");  // nodeList 
// console.log(navitem);  






// loop 
const navitems = document.getElementsByClassName("nav-item");  // html collection
console.log(typeof navitems);
console.log(Array.isArray(navitems));   // check navitems is a array like object or not! 

const navitem = document.querySelectorAll(".nav-item");  // nodeList 
console.log(navitem);  
