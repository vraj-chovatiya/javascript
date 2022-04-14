
function createUser(firstname,lastName,email,age,address){
  this.firstname = firstname;
  this.email = email;
  this.lastName = lastName;
  this.age = age;
  this.address = address;
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

const user1 = new createUser('vraj','chovatiya','vrajchovatiya@gmail.com',18,'surat');
const user2 = new createUser('viraj','chovatiya','vrajchovatiya@gmail.com',18,'surat');
const user3 = new createUser('parth','chovatiya','vrajchovatiya@gmail.com',19,'surat');

// // console.log(user1.about()); 
// console.log(user3.is18()); 
// // console.log(user3.sing()); 
// console.log(user1);


for(let key in user1){
  // console.log(key);
  if(user1.hasOwnProperties(key)){
    console.log(key);
  }
}


