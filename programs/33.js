// function inside function

function app(){
  const myfunc = () => {
    console.log("hello my function");
  }

  const addtwo = (number1, number2) => {
    return number1 + number2;
  }

  const mul = (mul1, mul2) => mul1*mul2;

  console.log("inside app");
  myfunc();
  console.log(addtwo(4,5));
  console.log(mul(4,5));
}

app();
