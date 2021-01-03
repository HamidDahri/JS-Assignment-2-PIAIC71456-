let pwd = "javascript";

let userPwd = prompt("Enter password: ");

if (!userPwd) {
  alert("Password should not be blank");
} else if (userPwd === pwd) {
  alert("Correct! The password you entered matches the original password !!!");
} else {
  alert("Incorrect password");
}
