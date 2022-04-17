// keypress event
// mouseover event

const body = document.body;

// body.addEventListener("keypress", (e)=>{
//   console.log(e.key);
// });


const mainbutton = document.querySelector(".btn-headline");
console.log(mainbutton);

mainbutton.addEventListener("mouseover", ()=>{
  console.log("mouse event runned!!");
});

mainbutton.addEventListener("mouseleave", ()=>{
  console.log("mouse leave runned!!");
});