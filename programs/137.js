// Promise.resolve
// Promise.chaining

// const mypromise = Promise.resolve(5);
// mypromise.then(value=>{
//   console.log(value);
// })



// then() --> then method hameesha promise return kartan hai


function mypromise(){
  return new Promise((resolve,reject)=>{
    resolve("foo");
  })
}

mypromise().then(value=>{
  console.log(value);
  value += "bar";
  return value;   //  -->   return Promise.resolve(value);
}).then(value => {
  console.log(value);
  value += "bazz";
  return value;
}).then(value => {
  console.log(value);
})