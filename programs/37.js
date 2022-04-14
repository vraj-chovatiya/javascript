// reset parameters 

function myfunc(a,b,...c){
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
  console.log(`c is `, c); 
}

myfunc(1,2,3,4,5,6,7,8,9,10);



function addition(...numbers){
  let total = 0;
   for(let i of numbers){
    total = total + i;
   }
   return total;
}

const answer = addition(1,2,3,4,5);
console.log(answer);