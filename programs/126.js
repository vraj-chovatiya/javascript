const mainbutton = document.querySelector("button");
const body = document.body;
const currentcolor = document.querySelector(".currentcolor");

function randomcoloegeneration(){
  const red = Math.floor(Math.random()*256);
  const green = Math.floor(Math.random()*256);
  const blue = Math.floor(Math.random()*256);
  const randomcolor = `rgb(${red}, ${green}, ${blue})`;
  return randomcolor;
}

mainbutton.addEventListener("click", ()=>{
  const randomcolor = randomcoloegeneration();
  body.style.backgroundColor = randomcolor;
  currentcolor.textContent = randomcolor;
});