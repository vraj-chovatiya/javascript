const allbtn = document.querySelectorAll(".mybutton button");

// for(let button of allbtn){
//   button.addEventListener("click",function(){
//   console.log(this.textContent);
//   });
// };


// for(i=0; i<allbtn.length; i++){
//   allbtn[i].addEventListener("click",function(){
//     console.log(this);
//   });
// };


allbtn.forEach(function(button){
  button.addEventListener("click",function(){
      console.log(this.textContent);
  });
});