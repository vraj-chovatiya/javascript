// class keyword
// class are fake

class createUser{
  constructor(firstname,lastname, email, age, address){      // it will create object
    console.log("constructor called");
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
    this.address = address;
  }


  about(){
    return `${this.firstname} is ${this.age} year old`;
  }
  is18(){
    return this.age >= 18;
  }
  sing(){
    return "la la la la ";
  }
  func(a){
    console.log(a);
  }
}


const user1 = new createUser('vraj','chovatiya','vrajchovatiya@gmail.com',18,'surat');
// const user2 = new createUser('viraj','chovatiya','vrajchovatiya@gmail.com',18,'surat');
// const user3 = new createUser('parth','chovatiya','vrajchovatiya@gmail.com',19,'surat');


user1.func("vraj");