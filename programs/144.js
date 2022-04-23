// async await

const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(){
  const response = await fetch(URL);
  const data = await response.json();
  // console.log(response);
  // console.log(data);
  return data;
}

// const returned = getPosts();
// console.log(returned);

getPosts()
  .then(mydata => {
    console.log(mydata);
  })
  .catch(error => {
    console.log(error);
  })

