// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = window.prompt("How long do you want your password?");
  var possiblePassword = "";

  while (
    passwordLength < 8 ||
    passwordLength > 128 ||
    !Number.isInteger(Number(passwordLength))
  ) {
    passwordLength = window.prompt("Password must be between 8 and 128!");
  }

  // console.log (passwordLength);

  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var number = "1234567890";
  var special = "!@#$%^&*()+=";

  var listUpper = window.confirm("Want Uppercase letters?");
  var listLower = window.confirm("Want lowercase letters?");
  var listNumber = window.confirm("Want numbers?");
  var listSpecial = window.confirm("Want special characters?");

  if (listUpper === true) {
    possiblePassword = possiblePassword + upper;
  }

  if (listLower === true) {
    possiblePassword = possiblePassword + lower;
  }

  if (listNumber === true) {
    possiblePassword = possiblePassword + number;
  }

  if (listSpecial === true) {
    possiblePassword = possiblePassword + special;
  }

  var result = "";

  if (possiblePassword === "") {
    return "You must have some characters in your password, try again!";
  }
  possiblePassword = possiblePassword.split("");

  for (var i = 0; i < passwordLength; i++) {
    result =
      result +
      possiblePassword[Math.floor(Math.random() * possiblePassword.length)];
  }

  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
