let vowelList = "AEIOUaeiou";
let vowelsCount = 0;
let str = prompt("Enter a character: ");

if (vowelList.indexOf(str[0]) !== -1) {
  alert("Vowel found!");
} else {
  alert("Not a vowel");
}
