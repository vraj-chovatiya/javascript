// new keyword

function createUser(firstname, age){
  this.firstname = firstname;
  this.age = age;
}

createUser.prototype.about = function(){
  console.log(this.firstname, this.age);
}

const user1 = new createUser("vraj", 18);

//new keyword
// 1.) empty object this = {}
// 2.) return this
// 3.) 
user1.about();