// arrow function

const new1 = () => {
  console.log("happy birthday vraj...!");
}
new1();


const addition = (number1, number2, number3) => {
  return number1 + number2 + number3;
}
add = addition(1,2,3);
console.log(add);


const iseven = (number) => {
  return number % 2 === 0;
}
console.log(iseven(5));
        
          //  /OR 

const even = number => {
  return number % 2 === 0;
}
console.log(even(6));

          //  / OR 

const odd = number => number % 2 === 0;
console.log(odd(0));    // one line of code(function)


const findtatget = (array, target) => {
  for(let i=0; i<array.length; i++){
    if(array[i]===target){
      return i;
    }
  }
  return -1;
}