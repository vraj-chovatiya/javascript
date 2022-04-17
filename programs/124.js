// behind the scene

console.log("Script Start !!!!");
const allbutton = document.querySelectorAll(".mybutton button");

allbutton.forEach((button)=>{
  button.addEventListener("click",(event)=>{
    let num = 0;
    for(let i=0; i<=1000000000; i++){
      num+=i;
    } 
    console.log(event.currentTarget.textContent,num);
  });
});

let outer = 0;
for(let i=0; i<=100000000; i++){
  outer+=i;
}
console.log("value of outer variable is: ", outer);
console.log("script end !!!!");