// some methods

const numbers = [3,5,7,8,10];

// kya ek bhi number esa hai jo even hain
//true

const ans = numbers.some((number)=>number%2===0);
console.log(ans);



const products = [
  {productid: 1, productname: "mobile", price: 10000},
  {productid: 2, productname: "laptop", price: 90000},
  {productid: 3, productname: "tv", price: 30000},
  {productid: 4, productname: "macbook", price: 299990},
  {productid: 5, productname: "headphone", price: 3200},
]

const answer = products.some((product)=>product.price > 100000);

console.log(answer);