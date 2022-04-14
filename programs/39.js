// callback function

function fun2(name){
  console.log("inside function");
  console.log(`my name is ${name}`);
}

function fun(callback){
  console.log("hello there I am a function...")
  callback("vraj chovatiya");
}

fun(fun2);



// function fun3(name){
//   console.log("hello vrAj..!");
//   console.log(`my name is ${name}`);
// }

// function fun1(callback){
//   console.log("hello friends..!");
//   callback("vraj..! chovatiya");
// }

// fun1(fun3);