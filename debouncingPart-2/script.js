// debouncing

const myinput = document.querySelector(".myinput");
const btn = document.querySelector(".btn");
console.log(btn);

function findsuggestions(e){
  console.log("Suggestions for ", e.target.value);
}

function debounce(func, delay){
  let settimeoutId;
  return function(...args){
    if(settimeoutId){
      clearTimeout(settimeoutId);
    }
    timeoutId = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  }
}

function leadingdebounce(func, delay){
  let timeoutId = null;
  return function (...args){
    if(timeoutId === null){
      func.call(this, ...args);
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null; 
    }, delay);
  }
}

// trailing debouncing 
// delay --> 300ms
// func call --- func call --- func call ---


// leading debouncing 
// delay --> 300ms
// func call --- func call --- func call ---

const decoratedfunc = debounce(findsuggestions, 1000);



// leading + trailing

function leadingdebounce(func, delay, option = {leading: false, trailing: true}){
  let timeoutId = null;
  return function (...args){
    let isinvoked = false;
    if(timeoutId === null && option.leading){
      func.call(this, ...args);
      isinvoked = true;
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if(option.trailing && !isinvoked){
        func.call(this, ...args);
      }
      timeoutId = null; 
    }, delay);
  }
}





function clickme(){
  // console.log(Math.floor(Math.random()*101));
  console.log("Added ot cart!");
}

// myinput.addEventListener("input",decoratedfunc);
btn.addEventListener("click",debounce(clickme,300, option = {leading: true, trailing: true}));