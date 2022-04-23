const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET",URL);
xhr.onload = () => {
  if(xhr.status >= 200 && CharacterData.status < 300){
     const data = JSON.parse(xhr.response);
    console.log(data);
  }else{
    console.log("something went wrong");
  }
}
xhr.send();