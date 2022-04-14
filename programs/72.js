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


// const animal1 = new animal("tom",2);
// console.log(animal1);
// console.log(animal1.eat());


//dog class

class Dog extends animal{   

}

// Dog is a Sub class 
// animal is a parent class 

const tommy = new Dog("tommy",3);
console.log(tommy);
console.log(tommy.eat());