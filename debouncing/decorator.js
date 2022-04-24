// Decorated function
// decorator function takes function and return function 
function decorator(func){
  return function(...args){
    console.log("you are callling decorated function!!", func.name);
    func.call(this, ...args);
  }
}

function hello(name){
  console.log("hello",name);
}

const fun = decorator(hello);
fun("vraj");