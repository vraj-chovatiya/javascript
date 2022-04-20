// understand callback

function myfunc(callback){
  console.log("Function is doing some task");
  callback();
}

// function myfunc2(){
//   console.log("function is doing task 2");
// }

myfunc(() => {
  console.log("Function is doing task 2");
});




function gettwonumber(num1, num2, onsuccess, onerror){
  if(typeof num1 === "number" && typeof num2 === "number"){
    onsuccess(num1, num2);
  }else{
    onerror();
  }
}
// function addtwonumber(number1, number2){
//   console.log(number1+number2);
// }
gettwonumber(4, 5, (number1, number2) => {
  console.log(number1+number2);
}, () => {
  console.log("Wrong Data type");
  console.log("Please pass numbers only");
});