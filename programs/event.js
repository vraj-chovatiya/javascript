// intro to event
// click 
// button press
// mouse hover

// event add karne ke 3 tarike hain
// 1) onclick() html tag ni andar 
// onclick="alert('you ckick me !')"

// 2) 
// const btn = document.querySelector(".btn-headline");
// console.log(btn);
// btn.onclick = function(){
//   console.log("you click me !!!!1");
// }

// 3) ----> method --> add event listner 

const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
  console.log("you clicked me !!!!");
});

// arrow function
btn.addEventListener("dblclick",()=>{
  console.log("double click me !!!!")
});


