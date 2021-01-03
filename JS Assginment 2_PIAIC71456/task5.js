var y = Math.floor(Math.random() * 10 + 1);

var x = parseInt(prompt("Guess number between 1 and 10: "), 10);

if (x == y) {
  alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN");
} else if (x === y + 1) {
  alert("Close enough to the correct answer");
} else {
  alert("OOPS SORRY!! WRONG ANSWER");
}
