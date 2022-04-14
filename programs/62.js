const usermethods = {
  about: function(){
    return`${this.firstname} is ${this.age} years old.`;
  },
  is18: function(){
      return this.age >= 18;
  }
}

function createUser(firstname,lastName,email,age,address){
  const user = {};
  user.firstname = firstname;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = usermethods.about;
  user.is18 = usermethods.is18;
  return user;
}

const user1 = createUser('vraj','chovatiya','vrajchovatiya@gmail.com',18,'surat');
const user2 = createUser('viraj','chovatiya','vrajchovatiya@gmail.com',18,'surat');
const user3 = createUser('parth','chovatiya','vrajchovatiya@gmail.com',19,'surat');

console.log(user1.about()); 
console.log(user3.about()); 