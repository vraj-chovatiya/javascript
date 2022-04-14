// functions 

function sing(){
  console.log("happy birthday vraj..!");
}

function twoplusfour(){
  return 2+4;
}

const returnvalue = twoplusfour();
console.log(returnvalue);



function addition(num1, num2){
  return num1 + num2;
}

const add = addition(10,20);
console.log(add);

function iseven(number){
  return number%2===0;
}

console.log(iseven(2));

// function
// input: array, target (number)
// output: index of target if target present in array 

function findtarget(array, target){
  for(let i=0; i<array.length;i++){
    if(array[i]===target){
      return i;
    }
  }
  return -1;
}

const myarray = [1,2,4,5,4];
const ans = findtarget(myarray, 5);
console.log(ans);



// function expression 

const sum = function(){
  console.log("hello vraj..");
}

sum();