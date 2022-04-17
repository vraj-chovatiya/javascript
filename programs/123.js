// event object

const firstbutton = document.querySelector("#one");
firstbutton.addEventListener("click",function(event){
  console.log(event.currentTarget);
});

// jab bhi mai kisi bhi element pe event listner add hoga
// js Engine ---- line by line execute karta hai
// browser ---- js Engine + extra features
// browser ---- js Engine + webApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum kar rahe hai
// browser -----2 
// 1). callback function hai vo js Engine ko degi ....
// 2). callback function ke sath browser jo event hua hai information bhi dega
// ye info hamein ek object ke form mai milegi
