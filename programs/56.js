// methods
// function inside object

// const person = {
//   firstname: 'vraj chovatiya',
//   age: 18,
//   about: function(){
//     console.log(`person name is ${this.firstname} and person age is ${this.age}`)
//   }
// }
// person.about();


function personInfo(){
  console.log(`person name is ${this.firstname} and person age is ${this.age}`)
}

const person1 = {
  firstname: 'vraj chovatiya',
  age: 18,
  about: personInfo
}
const person2 = {
  firstname: 'vraj',
  age: 17,
  about: personInfo
}
const person3 = {
  firstname: 'parth chovatiya',
  age: 19,
  about: personInfo
}
 
person1.about();
person2.about();
person3.about();