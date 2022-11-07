const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const lowercaseEl = document.getElementById('lowercase')
const uppercaseEl = document.getElementById('uppercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = resultEl.innerText

  if(!password) {return}

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  // document.execCommand('copy') says it's depreciated 
  navigator.clipboard.writeText(textarea.value);
  textarea.remove()
  alert('Password coppied')
})

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value // + infront make it a number
  const hasLower = lowercaseEl.checked
  const hasUpper = uppercaseEl.checked
  const hasNumbers = numbersEl.checked
  const hasSymbols = symbolsEl.checked

  if(length > 20 || length < 8) {
    alert('Password length must be between 8 and 20')
  } else {
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumbers, hasSymbols, length)
  }

})

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''
  const typesCount = lower + upper + number + symbol
  const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

  if(typesCount === 0) {
    return ''
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunc[funcName]()
    })
  }

  const finalPassword = generatedPassword.slice(0, length)

  return finalPassword
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}