const URL = "https://jsonplaceholder.typicode.com/posts";

function sendrequest(){
  return new Promise(function(resolve,reject){
    const xhr = new XMLHttpRequest();
    xhr.open("GET",URL);
    xhr.onload = function(){
      if(xhr.status >= 200 && xhr.status < 300){
        resolve(xhr.response);
      }else{
        reject(new Error("something went wrong"));
      }
    }

    xhr.onerror = function(){
      reject(new Error("something went wrong"));
    }
    xhr.send();
  })
}

sendrequest("GET",URL)
  .then(response => {
    const data = JSON.parse(response);
    // console.log(data);
    return data;
  })
  .then(data => {
    const id = data[3].id;
    return id;
  })
  .then(id => {
    const url = `${URL}/${id}`;
    console.log(url);
  })