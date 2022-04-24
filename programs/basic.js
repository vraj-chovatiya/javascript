// using getElementById selector

const mainheading = document.getElementById("main-heading");
console.log(mainheading);




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

const navitems = document.getElementsByClassName("nav-item");  // html collection
console.log(typeof navitems);
console.log(Array.isArray(navitems));   // check navitems is a array like object or not! 

const navitem = document.querySelectorAll(".nav-item");  // nodeList 
console.log(navitem);  






// loop 
const navitems = document.getElementsByClassName("nav-item");  // html collection
console.log(typeof navitems);
console.log(Array.isArray(navitems));   // check navitems is a array like object or not! 

const navitem = document.querySelectorAll(".nav-item");  // nodeList 
console.log(navitem);  



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
headline.innerHTML = "<h1> inner HTML changed </h1>";
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
div.style.color = "black";



// class list, add, remove, toggle class

const classTodo = document.querySelector(".todo-section");
console.log(classTodo.classList);
classTodo.classList.add("bg-dark");
classTodo.classList.remove("container");
const ans = classTodo.classList.contains("container");
console.log(ans);

classTodo.classList.toggle("bg-dark");
// toggle method use, class are available so it will remove it or class are not available so it will add class. 





// *************************
// document.createElement
// append
// prepend 
// remove


const todolist = document.querySelector(".todo-list");
const todoitem = document.createElement("li");
const todotext = document.createTextNode("new todo list");
todoitem.textContent = "new todo item";
todoitem.append(todotext);
todolist.append(todoitem);


const todo1 = document.querySelector(".todo-list li");
todo1.remove();





// before and after method

const todolist = document.querySelector(".todo-list");
const todoitem = document.createElement("li");
const todotext = document.createTextNode("after method");
todoitem.append(todotext);
todoitem.textContent = "todo list | after method";
todolist.before(todoitem);
todolist.after(todoitem);





// Element.insertedjecentHTML(where, html)
// beforebegin
// afterbegin
// beforeend
// afterend

const todolist = document.querySelector(".todo-list");
todolist.insertAdjacentHTML("beforeend", "<li> Todo 2 </li>");

const todolist2 = document.querySelector(".todo-list");
todolist2.insertAdjacentHTML("afterbegin", "<li> Todo 3 </li>");

const todolist3 = document.querySelector(".todo-list");
todolist3.insertAdjacentHTML("afterbegin", "<li> Todo 4 </li>");





// clone nodes

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "todo 2";
const clone = li.cloneNode(true);
ul.append(li);
ul.prepend(clone);






// some old methods to support old IE
// appendchild
// insertbefore
// // replacechild
// // removechild


// // ** appendChild ** 
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "todo 2";
ul.appendChild(li);

// // ** insertbefore ** 
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
const referece = document.querySelector(".first-class");
li.textContent = "todo 2";
ul.appendChild(li);

// // ** replacechild **
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
const referece = document.querySelector(".first-class");
li.textContent = "todo 2";
ul.replaceChild(li, referece);

// // ** removeChild **
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
const referece = document.querySelector(".first-class");
li.textContent = "todo 2";
ul.removeChild(referece);






// // static list vs live list

// // queryselsctorall hamein static list dengi
// // getlementbyomething hamein live list degi 

const ul = document.querySelector(".todo-list");
const listitem = ul.getElementsByTagName("li");
const sixitem = document.createElement("li");
sixitem.textContent = "item 6";
ul.append(sixitem);
console.log(listitem);



// how to get the dimention of element
// height width 

 const sectiontodo = document.querySelector(".todo-section");
 const info = sectiontodo.getBoundingClientRect();
 console.log(info);