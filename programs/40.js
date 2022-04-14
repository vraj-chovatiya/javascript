// function returning function


function fun1(){
  function fun2(){
    console.log("hello world");
  }
  return fun2;
}
// hire order function 👆🏻

const ans = fun1();
ans();



// other way 👇🏻
function fun(){
  return function(){
    return "hello word";
  }
}

const answer = fun();
console.log(answer());



