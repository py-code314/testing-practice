// Function to generate cipher text
function caesarCipher(string, key) {
  // Generate array with lower and upper case letters
  const plainTextAlphabetArray =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  // Generate array with shifted letters
  const cipherTextAlphabetArray = generateCipherTextAlphabetArray(
    plainTextAlphabetArray,
    key
  )

  // Generate an array with matching plain and cipher alphabets
  const matchingArray = generateMatchingArray(
    plainTextAlphabetArray,
    cipherTextAlphabetArray
  )

  const cipherText = generateCipherText(string, matchingArray)

  return cipherText
}

function generateCipherTextAlphabetArray(plainTextAlphabetArray, key) {
  // Use modulo 52 to generate new index if index + key > 50
  const cipherTextAlphabetArray = plainTextAlphabetArray.map((_, index) =>
    index + key <= 50
      ? plainTextAlphabetArray[index + key]
      : plainTextAlphabetArray[(index + key) % 52]
  )

  return cipherTextAlphabetArray
}

function generateMatchingArray(
  plainTextAlphabetArray,
  cipherTextAlphabetArray
) {
  const matchingArray = plainTextAlphabetArray.map((_, index) => [
    plainTextAlphabetArray[index],
    cipherTextAlphabetArray[index],
  ])
  return matchingArray
}

function generateCipherText(string, matchingArray) {
  let cipherText = ''

  string.split('').forEach((stringAlphabet) => {
    let matched = false
    for (let i = 0; i < matchingArray.length; i++) {
      const array = matchingArray[i]

      if (
        stringAlphabet === array[0] &&
        stringAlphabet === stringAlphabet.toLowerCase()
      ) {
        cipherText += array[1].toLowerCase()
        matched = true
        break // Stop iterating over remaining arrays
      } else if (
        stringAlphabet === array[0] &&
        stringAlphabet === stringAlphabet.toUpperCase()
      ) {
        cipherText += array[1].toUpperCase()
        matched = true
        break
      }
    }

    // Add the unmatched character after the loop ends
    if (!matched) {
      cipherText += stringAlphabet
    }
  })

  return cipherText
}

module.exports = caesarCipher
