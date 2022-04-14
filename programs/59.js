// arrow function

const user1 = {
  firstname: 'vraj',
  age: 18,
  about: () => {
    console.log(this.firstname, this.age);
  }
}

user1.about()