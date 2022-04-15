// using getElementById selector

// const mainheading = document.getElementById("main-heading");
// console.log(mainheading);




// using queryselector
const mainheading = document.querySelector("#main-heading");
const header = document.querySelector(".header");
const container = document.querySelector(".container"); // multiple class ne select karyu hoy to first class jene apyo hoy ae j print thay. and badha class ne access karva hoy to "querySelectorAll" method use thay.
console.log(mainheading);
console.log(header);
console.log(container);




// change text
// textcontent and innertext

const heading = document.getElementById("main-heading");
console.log(heading.textContent);
heading.textContent = "this is something else";
console.log(heading.textContent);



// change the styles of Elements 

const m_heading = document.querySelector("div.headline h2");
console.log(m_heading.style);
m_heading.style.color = "#fff";
m_heading.style.backgroundColor = "blue";
m_heading.style.padding = "10px";
m_heading.style.border  = "3px solid green";




// get and set attribute
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href", "https://codeprog.com");
console.log(link.getAttribute("href"));


const input = document.querySelector(".form-todo input");
console.log(input.getAttribute("type"));





// get multiple elements using getElements by class name
// get multiple items using querySelector

// const navitems = document.getElementsByClassName("nav-item");  // html collection
// console.log(typeof navitems);
// console.log(Array.isArray(navitems));   // check navitems is a array like object or not! 

// const navitem = document.querySelectorAll(".nav-item");  // nodeList 
// console.log(navitem);  






// loop 
// const navitems = document.getElementsByClassName("nav-item");  // html collection
// console.log(typeof navitems);
// console.log(Array.isArray(navitems));   // check navitems is a array like object or not! 

// const navitem = document.querySelectorAll(".nav-item");  // nodeList 
// console.log(navitem);  



const navitem = document.getElementsByTagName("a");
console.log(navitem);


for(i=0; i<navitem.length; i++){
  const nav = navitem[i];
  nav.style.backgroundColor = "red";
  nav.style.color = "white";
  nav.style.padding = "10px";
  nav.style.fontWeight = "bold";
}



// for of loop 
for(const value of navitem){
  value.style.fontWeight = "normal";
  value.style.color = "yellow";
}




// inner html 

const headline = document.querySelector(".headline");
console.log(headline);
console.log(headline.innerHTML);
headline.innerHTML = "<h1> inner HTML changed ";
headline.innerHTML += "<button class=\"btn\"> Learn More </button> ";
console.log(headline.innerHTML);





// DOM tree 

const rootnode = document.getRootNode();
const htmlelementnode = rootnode.childNodes[0];
console.log(htmlelementnode);
const headelementnode = htmlelementnode.childNodes[0];
console.log(htmlelementnode.childNodes);
const textnode = htmlelementnode.childNodes[2];
console.log(htmlelementnode.ChildNodes);



//task

const h1 = document.querySelector("h1");
const div = h1.parentNode;
div.style.backgroundColor = "white";
div.style.color = "black"; 1