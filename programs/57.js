function hello(){
  console.log("hello world");
}

// hello.call(); 
// call apply bind 

function about(hobby, favoriteMusic){
  console.log(this.firstname, this.age, hobby, favoriteMusic);
}

const user1 = {
  firstname: "vraj",
  age: 18,
}

const user2 = {
  firstname: "parth",
  age: 18,
}

about.call(user2,"guitar","vraj");
// user1.about.call(user1);
// user1.about.call();


// apply
about.apply(user1,["guitar","bach"]);

//bind 
about.bind(user1,"guitar","bach");