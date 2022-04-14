// every method
// it is check all mehods are even or odd 
const numbers = [2,4,6,8];

// numbers.every((number)=>number%2===0);

function iseven(number){
  return number%2===0;
}

const ans = numbers.every(iseven);

// callback function ----> true/false  (boolean)

// every method ----> true/false (boolean)

console.log(ans);


const products = [
  {productid: 1, productname: "p1", price: 299},
  {productid: 2, productname: "p2", price: 10000},
  {productid: 3, productname: "p3", price: 3000},
  {productid: 4, productname: "p4", price: 2990},
  {productid: 5, productname: "p5", price: 3200},
]


const answer = products.every((productItem)=>productItem.price < 30000);

console.log(answer);