// and or operator

let firstname = "vraj";
let age = 22;

if(firstname[0] === "v"){
  console.log('your name start with v');
}
if(age>18){
  console.log('you are above 18')
}

//end operator
if(firstname[0] === "r" && age>18){
  console.log('name starts with v and above 18');
}
else{
  console.log('overall condition false');
}

//or operator
if(firstname[0] === "v" || age>18){
  console.log('name starts with v and above 18');
}
else{
  console.log('overall condition false');
}
