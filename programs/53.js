// Maps
// map is an iterable

//store data in ordered fashion 

// store key value pair (like objects)
// duplicate keyw are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string

// object literal
// key --> string
// key --> symbol

const person = {
  firstname: "vraj",
  age: 18
}

// console.log(person.firstname);
// console.log(person['firstname']);

for(let key in person){
    console.log(key);
}




// key value pair

const man = new Map();
man.set('firstname','vraj');
man.set('age','18');
man.set(1,'one');
// man.set([1,2,3],'onetwothree');
// man.set({1: 'one'}, 'onetwo');

// console.log(man);
// console.log(man.get('firstname'));
// console.log(man.keys());

// for(let key of man.keys()){
//   console.log(key, typeof key);
// }

// for(let key of man){
//   console.log(key);
//   console.log(Array.isArray(key)); // it is check this object is array or not 
// }

for(let [key,value] of man){
  console.log(key, value); 
}

const name = new Map([['firstname','vraj'],['age',18]]);
console.log(name);


const person1 = {
  id: 1,
  firstname: 'vraj'
};

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: 'male'});
console.log(extraInfo);
console.log(person1.id);
console.log(extrainfo.get(person1).age);