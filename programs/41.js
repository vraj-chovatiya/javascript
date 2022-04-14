// important array methods

//foreach    it is optional 
//map        most important
//filter 
//reduce


const numbers = [1,2,3,4]; 

function myfunc(numbers,index){
  console.log(`index is ${index} number is ${numbers}`);
}

// for(i=0; i<numbers.length; i++){
//   myfunc(numbers[i],i);
// }

numbers.forEach(myfunc);

// other way 👇🏻

numbers.forEach(function(number, index){
  console.log(`index is ${index} number is ${numbers}`);
});   // its call anonomous function 