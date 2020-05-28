// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Length and acceptable values

const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

let pasword = "";

// Password char loop
for(var i = 0; i <== complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length))
}

}