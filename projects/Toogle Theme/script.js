const togglebtn = document.querySelector(".toggle-theme");
const body = document.body;


function toggletheme(){
  if(body.classList.containes("dark-mode")){
    body.classList.remove("dark-mode");
    togglebtn.textContent = "Dark Mode";
  }
  else{
    body.classList.add("dark-mode");
    togglebtn.textContent = "Light Mode";
  }
}
togglebtn.addEventListener("click",toggletheme);