// Set (it is iterable)
// store data
// sets also have its own methods
// no index based access ✨ 
// order is not guaranteed
// unique items only (no duplicates allowed) ✨


// const items = ['item1','item2','item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(7);
numbers.add(['item1','item2','item1']);
numbers.add(['item1','item2']);
console.log(numbers);


for(let number of numbers){
  console.log(number);
}


// we will find any object in set using (has)

if(numbers.has(1)){
  console.log("1 is present..!");
}
else{
console.log("1 is not present..!");
}


// const string = new Set('abc');
// console.log(string);



const myarray = [1,2,3,4,5,5,6,6];
const uniqueElements = new Set(myarray);
console.log(uniqueElements);
// console.log(myarray);


let length = 0;
for(let element of uniqueElements){
  length++;
}
console.log(length);