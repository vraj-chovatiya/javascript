class animal{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  eat(){
    return `${this.name} is eating`;
  }

  isSuperCute(){
    return this.age <= 1;
  }

  isCute(){
    return true;
  }
}

class Dog extends animal{   
  constructor(name,age,speed){
    super(name,age);
    this.speed = speed;
  }

  run(){
    return `${this.name} is running ${this.speed}kmph`;
  }
} 

//object / instance
const tommy = new Dog("tommy",3,45);
console.log(tommy);
console.log(tommy.run());

