// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned Variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()[]{},./\<>?|";
var chosenCharacters = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate password function gets called in writePassword function, and it should return the final password
function generatePassword(){
  // Do random generation here and return the final password in the end
  var result = "";
  // Ask the user how many characters they want
  var length = prompt("How many characters in your random password (between 8 and 128)?");
  if(isNaN(length)){
    alert("You must input a number!");
    return generatePassword();
  }
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
