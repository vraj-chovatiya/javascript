// proto, prototype, class

const user = {
  firstname: "vraj",
  lastname: "chovatiya",
  email: "vrajchovatiya@gmail.com",
  age: 17,
  address: "House Number, Colony, Pincode, State",
  about: function(){
    return`${this.firstname} is ${this.age} years old.`;
  },
  is18: function(){
    return this.age >= 18;
  }
}
// const aboutuser = user.about();
// console.log(aboutuser);

//function (this function create object)
// 2. add key valur pair
// 3. object ko return karega 


function createUser(firstname,lastName,email,age,address){
  const user = {};
  user.firstname = firstname;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function(){
    return`${this.firstname} is ${this.age} years old.`;
  };
  user.is18 = function(){
      return this.age >= 18;
  };
  return user;
}

const user1 = createUser('vraj','chovatiya','vrajchovatiya@gmail.com',18,'surat');
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);