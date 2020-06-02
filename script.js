//inputs values
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUpperCasesEl = document.getElementById('includeUppercases')
const includLowerCasesEl = document.getElementById('includeLowercases')
const includeNumbersEl = document.getElementById
('includeNumbers')
const includeSpecialCharactersEl = document.getElementById('includeSpecialCharacters')
const form = document.getElementById('PasswordGenerator')

//Tells Array each individual char codes
const Uppercases_Char_Codes = arrayFromLowtoHigh(65, 90)
const Lowercases_Char_Codes = arrayFromLowtoHigh(97, 122)
const Numbers_Char_Codes = arrayFromLowtoHigh(48, 57)
const SpecialCharacters_Char_Codes = arrayFromLowtoHigh(33, 47).concat( arrayFromLowtoHigh(58, 64))

characterAmountNumber.addEventListener('input', characterAmount)
characterAmountRange.addEventListener('input', characterAmount)
 
// Listener Prevents Reload also checks to see if elements are true.
form.addEventListener('generate', event => { event.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercases = includeUppercasesEl.checked
  const includeLowercases = includeLowercasesEl.checked
  const includeNumbers = includeNumbersEl.checked
  const includeSpecialCharacters = includeSpecialCharacterEl.checked
  const password = generatePassword(characterAmount, includeUppercases, includeLowercases, includeNumbers, includeSpecialCharacters) { 
})

//Where array begins from
function generatePassword(characterAmount, includeUppercases, includeLowercases, includeNumbers, includeSpecialCharacters) {
  String.fromCharCode(65) //ASCII Code
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



  