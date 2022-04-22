//promise && setTimeout

// I want to retrive / reject promise after 2 seconds 

function mypromise(){
  return new Promise((resolve,reject)=>{
    const value = true;
    setTimeout(() => {
      if(value){
        resolve();
      }else{
        reject();
      }
    }, 2000);
  })
}

mypromise().then(()=>{
  console.log("resolved");
}).catch(()=>{
  console.log("rejected");
})