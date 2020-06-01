

  // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Length and acceptable values

const special = "!@#$%^&*()_+";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefhijklmnopqrstuvwxyz";
const numbers = "0123456789";



// Generating Password Prompts:
function generatePassword() {
  let passwordLength = prompt("Enter Number of Characters for Password");

  const special = confirm("Do you want special characters?");

  const numbers = confirm("Would you like numbers in password?");

  const upperCase = confirm("Do you want upper cases?");

  const lowerCase = confirm("Do you want lower cases?");
}

// Minimums
const minimumCount = 0;

const minimumSpecial = "";
const minimumNumbers = "";
const minimumUpperCase = "";
const minimumLowerCase = "";

// Generator
const functionArray = [
  function getNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 48 + 10));
  },
  
    function getSpecial() {
    return String.fromCharCode(Math.floor(Math.random() * special.length)
  },

  function getLowerCase() {
    return String.fromCharCode(math.floor(Math.random() * 26 + 97));
  },

  function getUpperCase() {
    return String.fromCharCode(math.foor(Math.random() * 26 + 65));
  }
];

// Checker
  if (lowerCase=== true) {
    minimumLowerCase = functionArray.getLowerCase();
    minimumCount++;
  }

  if (numbers === true) {
    minimumNumbers = funcitonArray.getNumbers();
    minimumCount++;

  }

  if (Uppercase === true) {
    minimumUpperCase = functionArray.getUpperCase();
    minimumCount++;
  }

  if (Special === true){
    minimumSpecial = functionArray.getSpecial();
    minimumCount++;
  }

  
  const randomPasswordGen = "";

// Random Char Loop
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) { 
  const randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGen += randomNumberPicked;

}

// Char Added to password
  randomPasswordGen += minimumNumbers;
  randomPasswordGen += minimumLowerCase;
  randomPasswordGen += minimumUpperCase;
  randomPasswordGen += minimumSpecial;

  return randomPasswordGen;

}


  