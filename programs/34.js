// lexical scope 


const myvar = "value1";

function myapp(){
  function myfunc(){
    // const myvar = "value23";
    const myfun2 = () =>{
      console.log("inside myfunction", myvar);
    }
    myfun2();
  }
  console.log(myvar);
  myfunc();
}

myapp();