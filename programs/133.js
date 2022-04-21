// callbacks, callback hell, pyramid of doom
// asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


// callback hell
// setTimeout(() => {
//   heading1.textContent = `Heading 1`;
//   heading1.style.color = "blue";
//   setTimeout(() => {
//     heading2.textContent = `Heading 2`;
//     heading2.style.color = "green";
//     setTimeout(() => {
//       heading3.textContent = `Heading 3`;
//       heading3.style.color = "yellow";
//       setTimeout(() => {
//         heading4.textContent = `Heading 4`;
//         heading4.style.color = "red";
//         setTimeout(() => {
//           heading5.textContent = `Heading 5`;
//           heading5.style.color = "yellow";
//           setTimeout(() => {
//             heading6.textContent = `Heading 6`;
//             heading6.style.color = "green";
//             setTimeout(() => {
//               heading7.textContent = `Heading 7`;
//               heading7.style.color = "blue";
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);


function changetext(element, text, color, time){
  setTimeout(() => {
    if(element){
      element.textContent = text;
      element.style.color = color;
    }else{
      console.log("your element does not exist");
    }
  }, time);
}

changetext(heading1, "one", "violet", 1000);