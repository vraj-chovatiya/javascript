// closer 

function func(){
  let counter = 0;
  return function(){
    if(counter < 1){
      console.log("hey you called me.");
      counter++;
    }
    else{
      console.log("mai already ek baar call ho chuka hoon!");
    }
  }
}

const myfun = func();
myfun();
myfun();