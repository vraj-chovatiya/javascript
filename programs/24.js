// how to iterate object

const person = {
  name:"vraj",
  age: 18,
  "person Hobbies":["Sleeping","Dancing","Reading","Singing"]
}

//for in loop
// object.keys

for(let key in person){
  console.log(key); // it give only key 
  console.log(person[key]); // it give only value
  console.log(`${key} : ${person[key]}`); // it will give key value pair 
  console.log(key,person[key]); // it will give key value pair another way
}


console.log(Object.key(person));

for(let key of Object.keys(person)){
  console.log(person[key]);
}