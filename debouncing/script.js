// debouncing

const myinput = document.getElementById("input-event");
// console.log(myinput);

// keyup
// input 💯
// change

// keypress
// keydown

function findsuggestions(e){
  console.log("Suggestions for ", e.target.value);
}

const decoratedfunc = debounce(findsuggestions, 1000);

myinput.addEventListener("input",decoratedfunc);


function debounce(func, delay){
  let timeoutId;
  return function(...args){
    if(timeoutId){
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  }
}
