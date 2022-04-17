// little practice with click events

const allbutton = document.querySelector(".mybutton button");
// console.log(allbutton.length);

// allbutton.forEach(button => {
//   button.addEventListner("click",(e)=>{
//     console.log(e.target);
//   })  
// });

allbutton.forEach(button =>{
  button.addEventListener("click", (e)=>{
    // console.log(e);
    e.target.style.backgroundColor = "yellow";
    
  });
});