// static methods and properties

class person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  static classinfo(){
    return 'this is person class';
  }
  static desc = "static properties";
  get fullname(){
    return `${this.firstname} ${this.lastname}`;
  }
  set fullname(fullname){
    const [firstname,lastname] = fullname.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
  eat(){
    return `${this.firstname} is eating`;
  }

  isSuperCute(){
    return this.age <= 1;
  }

  isCute(){
    return true;
  }
}

const person1 = new person("vraj","chovatiya",18);
// console.log(person1.eat());
// this method will be called in through class
console.log(person.classinfo());
console.log(person.desc);