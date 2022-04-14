//iterables
//jispe hum for of loop laga sake
//string , array are iterable

const firstname = "vraj";
for(let char of firstname){
  console.log(char);
}


const items = ['item1','item2','item3'];
for(let item of items){
  console.log(item);
}

// it is object 👇🏻 and object are not iterable

// const user = {'key1': 'value1', 'key2': 'value2'};
// for(let tem of user){
//   console.log(tem);
// }


//array like object 
//jiske pass length propartie hoti hai
// aur jisko hum index se access kar sakte hai
// example : string

const secondname = "vraj";
console.log(secondname.length);
console.log(secondname[0]);