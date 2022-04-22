// function returning promise

function ricepromise(){
  const bucket = ['coffee','chips','vegetables','salt','rice'];
  return new Promise((resolve,reject)=>{
    if(bukcet.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
      resolve({value:"friedrice"});
    }else{
      reject("could not do it");
    }
  })
} 


ricepromise().then(
  // jab promise resolve hoga
  (myfriderice)=>{
    console.log("lets it", myfriderice)
  }
  ).catch(
  (error)=>{
   console.log(error)
  }
)
