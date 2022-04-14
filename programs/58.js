const user1 = {
  firstname: "vraj",
  age: 18,
  about: function(){
    console.log(this.firstname, this.age);
  }
}

// don't do this mistake
// user1.about()

const myfunc = user1.about.bind(user1);
myfunc();