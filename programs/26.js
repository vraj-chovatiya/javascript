// spread operator

const array1 = [1,2,3];
const array2 = [5,6,7];

// const newarray = [...array1, ...array2];
const newarray = [..."123456789"];
console.log(newarray);

// spread operator in array 👆🏻

// spread operator in object 👇🏻

const obj1 ={
  key1: "value1",
  key2: "value2"
};
const obj2 ={
  key3: "value3",
  key4: "value4"
};

// const newobject = {...obj1, ...obj2, key5: "value5"};
const newobject = {..."abcd"};
console.log(newobject);