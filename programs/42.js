// map method
// it will create new array
 
const numbers = [1,2,3,4,5];

// const square = function(number){
//   return number * number;
// }
// const squareNumber = numbers.map(square);
// console.log(squareNumber); 


// other way 👇🏻


const squareNumber = numbers.map(function(number){
  return number *number;
});
console.log(squareNumber); 