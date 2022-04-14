// 0 se 9
// dry don't repeat yourself

let i = 1;
while(i<=3){
  console.log(i);
  i++;
}
console.log("hello");
console.log(`current value of i is ${i}`);

let num = 10;
let total = 0;
i = 1;

while(i<=100){
  total = total + i;
  i++;
}


//faster
// let Total = 100;
console.log(total);
Total = (num*(num+1))/2;
console.log(Total);