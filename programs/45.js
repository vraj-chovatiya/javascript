// sort method
// ASCII TABLE
// char : ascii value

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90 


// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122 
// '{' : 123
// '/' : 124
// '}' : 125


//sort

// assending order ==== return a-b
// desending order ==== return b-a

const numbers = [50,2,10,1200,410,2000];
// numbers.sort((a,b)=>{
//   return a-b;
// });

numbers.sort((a,b)=>a-b);
console.log(numbers);


//1200 , 410
// a-b -----> 790
// a-b -----> positive(greater than 0) ---> b,a
// 410, 1200

// a-b -----> negative -----> a,b
// 2,10 ----> -8


//price lowtohigh hightolow

const products = [
  {productid: 1, productname: "p1", price: 299},
  {productid: 2, productname: "p2", price: 10000},
  {productid: 3, productname: "p3", price: 3000},
  {productid: 4, productname: "p4", price: 2990},
  {productid: 5, productname: "p5", price: 200},
]

// lowtihigh

// products.sort((a,b)=>{
//   return a.price - b.price;
// });

// console.log(products);

const lowtohigh = products.slice(0).sort((a,b)=>{
  return a.price - b.price;
});

console.log(lowtohigh);



//hightolow

products.sort((a,b)=>{
  return b.price - a.price;
});

console.log(products);