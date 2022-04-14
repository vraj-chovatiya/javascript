// const usermethods = {
//   about: function(){
//     return `${this.firstname} is ${this.age} years old.`;
//   },
//   is18: function(){
//       return this.age >= 18;
//   },
//   sing: function(){
//     return 'type your favorite song.!';
//   }
// }

function createUser(firstname,lastName,email,age,address){
  const user = Object.create(createUser.prototype); //{}
  user.firstname = firstname;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

createUser.prototype.about = function(){
  return `${this.firstname} is ${this.age} years old.`
};
createUser.prototype.is18 = function(){
  return this.age >= 18;
}
createUser.prototype.sing = function(){
  return 'type your favorite song.!';
}

const user1 = createUser('vraj','chovatiya','vrajchovatiya@gmail.com',18,'surat');
const user2 = createUser('viraj','chovatiya','vrajchovatiya@gmail.com',18,'surat');
const user3 = createUser('parth','chovatiya','vrajchovatiya@gmail.com',19,'surat');

// console.log(user1.about()); 
// console.log(user3.is18()); 
// console.log(user3.sing()); 
console.log(user1);



