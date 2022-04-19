// synchronous programming
// synhcronous programming and single threaded


console.log("script start");

const id = setTimeout(() => {
  console.log("inside settimeout!");
}, 1000);

for(i=0;i<100;i++){
  console.log("hello vraj");
}

console.log("settimeOut id is: ", id);
clearTimeout(id);
console.log("script end");