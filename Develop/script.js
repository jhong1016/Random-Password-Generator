// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password function gets called in writePassword function, and it should return the final password
function generatePassword() {

// Assigned array variables
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialcharactersArray = ["!","@","#","$","%","^","&","*","(",")","[","]","{","}",",",".","<",">","?","|","-","_","=","+"];

// Empty array variables
var resultArray = [];
var userArray = [];

uppercaseArray [1]
//--------------------------------------------------
  // Ask the user how many characters they want
  var numCharacter = prompt ("How many characters in your random password (between 8 and 128)?");
  
  if(isNaN(numCharacter)){
    alert("You must input a number!");
    return generatePassword();
  }
  if(numCharacter<8 || numCharacter>128){
    alert("Please choose a number between 8 to 128!");
    return generatePassword();
  }

  // Ask the user if they want to include upper, lower, numbers and special characters
  var hasUpper = confirm ("Include upper case letters?");
  var hasLower = confirm ("Include lower case letters?");
  var hasNumbers = confirm ("Include numbers?");
  var hasSpecial = confirm ("Include special characters?");

  // Condition of arrays
  if (hasUpper){
    resultArray = resultArray.concat(uppercaseArray);
  }
  if (hasLower){
    resultArray = resultArray.concat(lowercaseArray);
  }
  if (hasNumbers){
    resultArray = resultArray.concat(numbersArray);
  }
  if (hasSpecial){
    resultArray = resultArray.concat(specialcharactersArray);
  }
  
  console.log(resultArray);

  for (var i = 0; i < numCharacter; i++) {
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
  }

  return userArray.join("");
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
