// objects
//objects reference type
// array are good but not sufficient for real world data
// objects store key value pair
// objects don't have index

// how to create objects 
// const person = {name:"vraj",age:18};

const person = {
  name: "vraj",
  age: 18,
  hobbies: ["Sleeping","Dancing","Reading"] 
};

console.log(typeof person);
console.log(person);
// how to access data from objects
// console.log(person.name); // its Dot(.) notation
console.log(person["name"]); // another way to access value // its Bracket([]) notation 
console.log(person.age);

console.log(person.hobbies);
// hoe to add key value pair objects 

// person.gender = "male"; // dot notation
person["gender"]="male"; // bracket notation 
console.log(person.gender);