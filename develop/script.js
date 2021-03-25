// create global variableS
var alphaLowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// console.log(alphaLowerArray);

var alphaUpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// console.log(alphaUpperArray);

var specialCharArray = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "'", ",", "<", ".", ">", "/", "?"];
// console.log(specialCharArray);

var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// console.log(numbersArray);

var possibleChar = passwordLength + alphaLowerArray.concat(alphaUpperArray, specialCharArray, numbersArray);
console.log(possibleChar);
var passwordLength = 0;

// // variable for responses to confirms/prompts
// var _ = ;

// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

// function to generate password
function generatePassword(){
  //TODO: your code here
  // return "extraSecretPassword"

var passwordLength = prompt("Let's create a password!\n\nEnter a number between 8 and 128 for the length of your password!");

// display prompt asking user for password length
  // TODO: match edge cases - is a number && is >= 8, <= 128
  // TODO: ensure that the user answered true to at least one confirm

// check if character length is acceptable
if (passwordLength >= 8 && passwordLength <= 12) {
  alert("This password length is valid!");
} else if (passwordLength < 8) {
  alert("The number you have selected is too small.\nPlease enter a number between 8 and 128!");
} else if (passwordLength > 12) {
  alert("The number you have entered exceeds the character limit.\nPlease enter a number between 8 and 128!");
} else {
  alert("You have entered an invalid value.\nPlease enter a number between 8 and 128");
};

// display confirms for all different character types
// option 1
var lowerCase = confirm("Include lower case letters?");
// option 2
var upperCase = confirm("Include upper case letters?");
// option 3
var specialCharacters = confirm("Include special characters?");
// option 4
var numberValue = confirm("Include number value?");


// check IF the user confirmed on any of the boolean variables that were created
  // add that array to the possible characters array (combining arrays)

// conditions for user options chosen
// OK to options 1-4 
if (lowerCase && upperCase && specialCharacters && numberValue) {
  option = passwordLength.concat(alphaLowerArray, alphaUpperArray, specialCharArray, numbersArray);
// OK to options 1-2
} else if (lowerCase && upperCase && !specialCharacters && !numberValue) {
  option = passwordLength.concat(alphaLowerArray, alphaUpperArray);
// OK to options 2-3
} else if (lowerCase && upperCase && !specialCharacters && !numberValue) {
  option = passwordLength.concat(alphaUpperArray, specialCharArray);
// OK to options 3-4
} else if (!lowerCase && !upperCase && specialCharacters && numberValue) {
  option = passwordLength.concat(specialCharArray, numbersArray);
// OK to options 1, 3
} else if (lowerCase && !upperCase && specialCharacters && !numberValue) {
  option = passwordLength.concat(alphaLowerArray, specialCharArray);
// OK to options 1, 4
} else if (lowerCase && !upperCase && !specialCharacters && numberValue) {
  option = passwordLength.concat(alphaLowerArray, numbersArray);
// OK to options 1, 2, 3
} else if (lowerCase && upperCase && specialCharacters && !numberValue) {
  option = passwordLength.concat(alphaLowerArray, alphaUpperArray, specialCharArray);
// OK to options 2, 3, 4
} else if (!lowerCase && upperCase && specialCharacters && numberValue) {
  option = passwordLength.concat(alphaUpperArray, specialCharArray, numbersArray);
// OK to options 3, 4, 1
} else if (lowerCase && !upperCase && specialCharacters && numberValue) {
  option = passwordLength.concat(alphaLowerArray, specialCharArray, numbersArray);
// OK to options 4, 1, 2
} else if (lowerCase && upperCase && !specialCharacters && numberValue) {
  option = passwordLength.concat(alphaLowerArray, alphaUpperArray, numbersArray);
// OK to options 1, 3, 4
} else if (lowerCase && !upperCase && specialCharacters && numberValue) {
  option = passwordLength.concat(alphaLowerArray, specialCharacters, numberValue);
// OK to options 1, 2, 4
} else if (lowerCase && upperCase && !specialCharacters && numberValue) {
  option = passwordLength.concat(alphaLowerArray, alphaUpperArray, numbersArray); 
// OK to option 1
} else if (lowerCase && !upperCase && !specialCharacters && !numberValue) {
  option = passwordLength.concat(alphaLowerArray);
// OK to option 2
} else if (!lowerCase && upperCase && !specialCharacters && !numberValue) {
  option = passwordLength.concat(alphaUpperArray);
// OK to option 3
} else if (!lowerCase && !upperCase && specialCharacters && !numberValue) {
  option = passwordLength.concat(specialCharArray);
// OK to option 4
} else if (!lowerCase && !upperCase && !specialCharacters && numberValue) {
  option = passwordLength.concat(numbersArray);
// NO to all options
} else {
  option = alert("Please select at least one criteria to generate your password!");
};

// prompt("Create a new password:\n\nPassword must include:\n\n8 character minimum\nAt least 1 lowercase letter\nAt least 1 uppercase letters\nAt least 1 number\nAt least 1 symbol");

// create a variable that will hold the final password
// empty string to hold new password
var newPassword = "";

// create a loop for as long as passwordLength
for (var i = 0; i > passwordLength; i++) {
  newPassword = newPassword.concat(alphaLowerArray, alphaUpperArray, specialCharArray, numbersArray);
};

// for each iteration, select a random char out of the possible characters array and add it to the final password variable
var newPassword = Math.floor(Math.random() * newPassword.length);

// return the final vairable from the generatePassword function
return newPassword;

  // return "extraSecretPassword"
};


// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);


