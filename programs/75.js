// getters and setters

class person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  get fullname(){
    return `${this.firstname} ${this.lastname}`;
  }
  set fullname(fullname){
    // fullname.split(" ")
    // parth chovatiya
    const [firstname,lastname] = fullname.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
}


const person1 = new person("vraj","chovatiya",18);
console.log(person1);
// console.log(person1.fullname());
console.log(person1.fullname);


// get method trough we can call a function in like properties call 
// it mean no parantheses() in calling a function 

person1.fullname = "parth chovatiya";
console.log(person1);
// person1.firstname = "parth";
// person1.lastname = "chovatiya";
