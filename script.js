//inputs values
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUpperCasesEl = document.getElementById('includeUppercases')
const includLowerCasesEl = document.getElementById('includeLowercases')
const includeNumbersEl = document.getElementById
('includeNumbers')
const includeSpecialCharactersEl = document.getElementById('includeSpecialCharacters')

const form = document.getElementById('PasswordGenerator')

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

//Begin array from
function generatePassword(characterAmount, includeUppercases, includeLowercases, includeNumbers, includeSpecialCharacters) {
  String.fromCharCode(97)
}

function arrayFromLowtoHigh(low, high)

function characterAmount(event) {
  const value = event.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}



  