// closer 


function myfunction(power){
  return function(number){
    return number ** power;
  }
}

const square = myfunction(3);
const ans = square(2);
console.log(ans);