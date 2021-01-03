let myCity = prompt("Please enter your city name ").toUpperCase();

if (!myCity) {
  alert("Please enter city name ");
} else if (myCity === "KARACHI") {
  alert("Welcome to City of light");
} else {
  alert("Welcome to great Pakistan's City");
}
