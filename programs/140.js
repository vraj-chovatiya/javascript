const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);

//step1: use open method
// console.log(xhr.readyState);
xhr.open("GET",URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function(){
//   // console.log(xhr.readyState);
//   if(xhr.readyState === 4){
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(typeof data);
//   }
// }

xhr.onload = function(){
  const response = xhr.response;
  const data = JSON.parse(response);
  console.log(data);
}

xhr.send()