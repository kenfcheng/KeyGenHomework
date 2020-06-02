//inputs values
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUpperCasesEl = document.getElementById('includeUppercases')
const includeNumbersEl = document.getElementById
('includeNumbers')
const includeSpecialCharactersEl = document.getElementById('includeSpecialCharacters')
const form = document.getElementById('PasswordGenerator')
const textArea = document.getElementById('PasswordDisplay')

//Tells Array each individual char codes
const Uppercases_Char_Codes = arrayFromLowtoHigh(65, 90)
const Lowercases_Char_Codes = arrayFromLowtoHigh(97, 122)
const Numbers_Char_Codes = arrayFromLowtoHigh(48, 57)
const SpecialCharacters_Char_Codes = arrayFromLowtoHigh(33, 47).concat(arrayFromLowtoHigh(58, 64)).concat(
    arrayFromLowtoHigh(91, 96)
 ).concat(
   arrayFromLowtoHigh(123, 126)
) 

characterAmountNumber.addEventListener('input', characterAmount)
characterAmountRange.addEventListener('input', characterAmount)
 
// Listener Prevents Page Reload 
form.addEventListener('generate', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value

  const includeUppercases = includeUppercasesEl.checked
  const includeNumbers = includeNumbersEl.checked
  const includeSpecialCharacters = includeSpecialCharacterEl.checked
  passwordDisplay.innerText = password
  const password = generatePassword(characterAmount, includeUppercases, includeNumbers, includeSpecialCharacters)
})


//Where array begins from
function generatePassword(characterAmount, includeUppercases, includeNumbers, includeSpecialCharacters) {
  let charCodes = Lowercases_Char_Codes
  if (includeUppercases) charCodes = charCodes.concat(Uppercases_Char_Codes)
  if (includeNumbers) charCodes = charCodes.concat(Numbers_Char_Codes)
  if (includeSpecialCharacters) charCodes = charCodes.concat(SpecialCharacters_Char_Codes)

  //Give Random number between 0 and charAmount and gives code
  const passwordCharacter = []
  for (let i = 0; i < characterAmount; i++) {
    const character = characterCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
//creates characters for password
  String.fromCharCode(65) //ASCII Code
  console.log(Lowercases_Char_Codes)
}
//Indicates the array loop from low to high
function arrayFromLowtoHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)

  }
  return array
}


function characterAmount(event) {
  const value = event.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}



  