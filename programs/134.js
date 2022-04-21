// promise
// promiss is a future value jo hamain abhi nahi pata pr bad mai pata chalegi 

const bucket = ['coffee','chips','vegetables','salt','rice'];


//produce
const mypromise = new Promise((resolve,reject)=>{
  if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
    // resolve("Fried Rice");
    resolve({value:"friderice"});
  }else{
    reject("Couldn't do it");
  }
}) 


// consume
// how to consume

mypromise.then(
    // jab promise resolve hoga
    (myfriderice)=>{
      console.log("lets it", myfriderice)
    }
    ,
    // jab promise reject hoga
//     (error)=>{
//       console.log(error);
//     }
).catch(
  (error)=>{
    console.log(error)
  }
)

