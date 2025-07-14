/* Encrypts the given text with the Caesar cipher */
function caesarCipher(text, shiftKey) {
  // Check for missing arguments
  if (arguments.length < 2) {
    throw new Error('Missing arguments')
  }

  // Check if text is string
  if (typeof text !== 'string') {
    throw new TypeError('Input must be a string')
  }

  if (typeof shiftKey !== 'number') {
    throw new TypeError('Input must be a number')
  }

  // Generate an array with plain alphabets
  const plainAlphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')

  // Generate an array with cipher(shifted) alphabets
  const cipherAlphabets = generateCipherAlphabets(plainAlphabets, shiftKey)

  // Generate a matching array
  const matchingArray = generateMatchingArray(plainAlphabets, cipherAlphabets)

  const cipherText = generateCipherText(text, matchingArray)

  return cipherText
}

/* Generate an array of cipher alphabets given the plain alphabets and the shift key */
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

/* Generates an array of plain to cipher alphabet pairs */
function generateMatchingArray(plainAlphabets, cipherAlphabets) {
  const matchingArray = plainAlphabets.map((_, index) => [
    plainAlphabets[index],
    cipherAlphabets[index],
  ])

  return matchingArray
}

/* Generates cipher text from the string and the matching array */
function generateCipherText(str, matchingArray) {
  let cipherText = ''

  str.split('').forEach((character) => {
    let matched = false
    for (let i = 0; i < matchingArray.length; i++) {
      const [plain, cipher] = matchingArray[i]

      // Convert the character to upper case if the string character is upper case
      if (character.toLowerCase() === plain) {
        cipherText +=
          character === character.toLowerCase() ? cipher : cipher.toUpperCase()
        matched = true // Prevents duplicate characters
        break // Stops the for loop
      }
    }

    // Adds non-alphabetical characters
    if (!matched) {
      cipherText += character
    }
  })

  return cipherText
}

module.exports = caesarCipher
