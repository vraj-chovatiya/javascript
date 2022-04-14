function hello(){
  console.log("hello world");
}

// javascript function ==> function + objects

// console.log(hello.name);

//you can add your own properties
// hello.myownproperties = "very unique value";
// console.log(hello.myownproperties);

// name property ---> tells function name;

//function provides more usefull properties

// console.log(hello.prototype);  //{}

// only function provide prototype property 

// if(hello.prototype){
//   console.log("prototype is present");
// }else{
//   console.log("prototype is not present");
// }

hello.prototype.abc = "abc";
hello.prototype.sing = function(){
  return "hello";
}
console.log(hello.prototype);
console.log(hello.prototype.sing());
