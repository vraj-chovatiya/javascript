//for of loop in array

const fruits = ["apple","mango","grapes","banana","orange"];

for(let fruit of fruits){
  console.log(fruit);
}

// for in loop in Array

for (let index in fruits){
  console.log(index);  // it will give index of array
  
  console.log(fruits[index]);
}