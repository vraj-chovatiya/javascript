// nested if else

// winning number 19

// 19 you guess is right
// 17 too low
// 20 too high

let winning_number = 19;
let guess_number = prompt("guess a number");

if (winning_number === guess_number) {
  console.log("you won...!");
} else {
  if (winning_number > guess_number) {
    console.log("too low...");
  } else if (winning_number < guess_number) {
    console.log("too high...");
  }
}
