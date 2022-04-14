// array destructuring

const myArray = ["value1","value2","value3","value4"];
// let a = myArray[0];
// console.log("value of array 1 :",a);
// let b= myArray[1];
// console.log("value of array 2 :",b);


let [a,b] = myArray;
let myNewArray = myArray.slice(2);
console.log("value of array 1 :",a);
console.log("value of array 2 :",b);
console.log(myNewArray);