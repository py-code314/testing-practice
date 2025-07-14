// Function to generate cipher text
function caesarCipher(text, shiftKey) {
  // Check for missing arguments
  if (arguments.length < 2) {
    throw new Error('Missing arguments')
  }

  // Check for string as first argument
  if (typeof text !== 'string') {
    throw new TypeError('Input must be a string')
  }

  // Check if key is number
  if (typeof shiftKey !== 'number') {
    throw new TypeError('Input must be a number')
  }

  // Generate an array with lower and upper case letters
  const plainAlphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')

  // Generate an array with shifted letters
  const cipherAlphabets = generateCipherAlphabets(plainAlphabets, shiftKey)

  // Generate an array with matching plain and cipher alphabets
  const matchingArray = generateMatchingArray(plainAlphabets, cipherAlphabets)

  const cipherText = generateCipherText(text, matchingArray)

  return cipherText
}

function generateCipherAlphabets(plainAlphabets, shiftKey) {
  const alphabetsLength = plainAlphabets.length
  const cipherAlphabets = plainAlphabets.map(
    (_, index) =>
      plainAlphabets[
        (((index + shiftKey) % alphabetsLength) + alphabetsLength) %
          alphabetsLength
      ]
  )

  return cipherAlphabets
}

function generateMatchingArray(plainAlphabets, cipherAlphabets) {
  const matchingArray = plainAlphabets.map((_, index) => [
    plainAlphabets[index],
    cipherAlphabets[index],
  ])

  return matchingArray
}

function generateCipherText(str, matchingArray) {
  let cipherText = ''

  str.split('').forEach((character) => {
    let matched = false
    for (let i = 0; i < matchingArray.length; i++) {
      const [plain, cipher] = matchingArray[i]

      if (character.toLowerCase() === plain) {
        cipherText += character === character.toLowerCase() ? cipher : cipher.toUpperCase()
        matched = true
        break
      }
    }

    if (!matched) {
      cipherText += character
    }
  })

  return cipherText
}

module.exports = caesarCipher
