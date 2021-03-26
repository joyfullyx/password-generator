// create global variableS
var alphaLowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// console.log(alphaLowerArray);

var alphaUpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// console.log(alphaUpperArray);

var specialCharArray = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "'", ",", "<", ".", ">", "/", "?"];
// console.log(specialCharArray);

var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// console.log(numbersArray);

// to hold valules depending on options
var holdChar = [];

// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

// function to generate password
function generatePassword(){

// display prompt asking user for password length
var passwordLength = prompt("Please enter a number between 8 and 128");

// match edge cases - is a number && is >= 8, <= 128
// ensure that the user answered true to at least one confirm
// check if character length is acceptable
if (passwordLength >= 8 && passwordLength <= 128) {
  confirm("This password length is valid!");
  // display confirms for all different character types
  // option 1
  var lowerCase = confirm("Include lower case letters?");
  console.log(lowerCase);
  // option 2
  var upperCase = confirm("Include upper case letters?");
  console.log(upperCase);
  // option 3
  var specialCharacters = confirm("Include special characters?");
  console.log(specialCharacters);
  // option 4
  var numberValue = confirm("Include number value?");
  console.log(numberValue);
} else {
  alert("You have entered an invalid value.\nPlease enter a number between 8 and 128");
  generatePassword();
};


// check IF the user confirmed on any of the boolean variables that were created
// add that array to the possible holdChar array (combining arrays)

// option = values concatenated to optionChoiceArray dependant of choices selected

// conditions for user options chosen
for (var i = 0; i < passwordLength; i++) {
  holdChar.concat(alphaLowerArray, alphaUpperArray, specialCharArray, numbersArray);
  // OK to options 1-4 
  if (lowerCase && upperCase && specialCharacters && numberValue) {
    option = holdChar.concat(alphaLowerArray, alphaUpperArray, specialCharArray, numbersArray);
    console.log(lowerCase && upperCase && specialCharacters && numberValue);
  // OK to options 1-2
  } else if (lowerCase && upperCase && !specialCharacters && !numberValue) {
    option = holdChar.concat(alphaLowerArray, alphaUpperArray);
  // OK to options 2-3
  } else if (lowerCase && upperCase && !specialCharacters && !numberValue) {
    option = holdChar.concat(alphaUpperArray, specialCharArray);
  // OK to options 3-4
  } else if (!lowerCase && !upperCase && specialCharacters && numberValue) {
    option = holdChar.concat(specialCharArray, numbersArray);
  // OK to options 1, 3
  } else if (lowerCase && !upperCase && specialCharacters && !numberValue) {
    option = holdChar.concat(alphaLowerArray, specialCharArray);
  // OK to options 1, 4
  } else if (lowerCase && !upperCase && !specialCharacters && numberValue) {
    option = holdChar.concat(alphaLowerArray, numbersArray);
  // OK to options 1, 2, 3
  } else if (lowerCase && upperCase && specialCharacters && !numberValue) {
    option = holdChar.concat(alphaLowerArray, alphaUpperArray, specialCharArray);
  // OK to options 2, 3, 4
  } else if (!lowerCase && upperCase && specialCharacters && numberValue) {
    option = holdChar.concat(alphaUpperArray, specialCharArray, numbersArray);
  // OK to options 3, 4, 1
  } else if (lowerCase && !upperCase && specialCharacters && numberValue) {
    option = holdChar.concat(alphaLowerArray, specialCharArray, numbersArray);
  // OK to options 4, 1, 2
  } else if (lowerCase && upperCase && !specialCharacters && numberValue) {
    option = holdChar.concat(alphaLowerArray, alphaUpperArray, numbersArray);
  // OK to options 1, 2, 4
  } else if (lowerCase && upperCase && !specialCharacters && numberValue) {
    option = holdChar.concat(alphaLowerArray, alphaUpperArray, numbersArray);
  // OK to option 1
  } else if (lowerCase && !upperCase && !specialCharacters && !numberValue) {
    option = holdChar.concat(alphaLowerArray);
  // OK to option 2
  } else if (!lowerCase && upperCase && !specialCharacters && !numberValue) {
    option = holdChar.concat(alphaUpperArray);
  // OK to option 3
  } else if (!lowerCase && !upperCase && specialCharacters && !numberValue) {
    option = holdChar.concat(specialCharArray);
  // OK to option 4
  } else if (!lowerCase && !upperCase && !specialCharacters && numberValue) {
    option = holdChar.concat(numbersArray);
  // NO to all options
  } else {
    option = alert("Please select at least one criteria to generate your password!");
    generatePassword();
  };
};
return finalizedPassword(option, passwordLength);
};

// for each iteration, select a random char out of the possible characters array and add it to the final password variable
// return the final vairable from the generatePassword function
// create empty var to hold finalPassword, return finalPassword
function finalizedPassword(data, passwordLength) {
  var finalPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    finalPassword+= data[Math.floor(Math.random()*data.length)];
};
return finalPassword;
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


