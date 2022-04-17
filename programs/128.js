// event bubbling / event propogation
// event capturing
// event delegation

console.log("hello world");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// capturing event
// child.addEventListener("click", ()=>{
//   console.log("Captured !!!!!!! child!!");
// },true);

// parent.addEventListener("click", ()=>{
//   console.log("Captured !!!!!!! parent!!");
// },true);

// grandparent.addEventListener("click", ()=>{
//   console.log("Captured !!!!!!! grandparent!!");
// },true);

// document.body.addEventListener("click", ()=>{
//   console.log("Captured !!!!!!! body!!");
// },true);



// no capture

// child.addEventListener("click", ()=>{
//   console.log("bubble on child!!");
// });

// parent.addEventListener("click", ()=>{
//   console.log("bubble on parent!!");
// });

// grandparent.addEventListener("click", ()=>{
//   console.log("bubble on grandparent!!");
// });

// document.body.addEventListener("click", ()=>{
//   console.log("bubble on body!!");
// });




// event delegation
grandparent.addEventListener("click",(e)=>{
  console.log(e.target.textContent);
})