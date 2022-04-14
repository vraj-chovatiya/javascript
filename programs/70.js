// // let number = [1,2,3];
// let number = new Array(1,2,3);  // second method to create array   
// // prototype
// // prototype --- functions
// console.log(Array.isArray(Array.prototype));
// console.log(number);

function hello(){
  console.log("hello");
}

console.log(hello.prototype);
hello.prototype = [];
hello.prototype.push('1');
console.log(hello.prototype);

