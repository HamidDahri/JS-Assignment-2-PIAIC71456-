let myColor = prompt(
  "Please enter traffic signal color: Red, Yellow or Green"
).toUpperCase();

if (!myColor) {
  alert("Please enter color name");
} else if (myColor === "RED") {
  alert("Must Stop");
} else if (myColor === "YELLOW") {
  alert("Read to move");
} else if (myColor === "GREEN") {
  alert("Move Now");
}
