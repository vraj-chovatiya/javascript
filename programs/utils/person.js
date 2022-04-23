export default class person{
  constructor(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  info(){
    console.log(this.firstname, this.lastname, this.age);
  }
}