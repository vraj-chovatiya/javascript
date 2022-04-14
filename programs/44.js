// reduce method

const number = [1,2,3,4,5,10];

// aim : sum of all the numbers in array 


const sum = number.reduce((accumulator, currentvalue)=>{
  return accumulator + currentvalue;
}, 100);
console.log(sum);

// accumulator , currentvalue , return 
//      1              2           3
//      3              3           6
//      6              4           10
//      10             5           15
//      15             10          25


const usercart = [
  {productid: 1, productname: "mobile", price: 12000},
  {productid: 2, productname: "laptop", price: 22000},
  {productid: 3, productname: "tv", price: 14000},
]

const totalAmount = usercart.reduce((totalprice, currentproduct)=>{
  return totalprice + currentproduct.price;
}, 0);

console.log(totalAmount);