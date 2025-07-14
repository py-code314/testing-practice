// Function to generate cipher text
function caesarCipher(str, key) {
  // Check for missing arguments
  if (arguments.length < 2) {
    throw new Error('Missing arguments')
  }

  // Check for string as first argument
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string')
  }

  // Check if key is number
  if (typeof key !== 'number') {
    throw new TypeError('Input must be a number')
  }

  // Generate array with lower and upper case letters
  const plainTextAlphabetArray =
    'abcdefghijklmnopqrstuvwxyz'.split('')

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

  const cipherText = generateCipherText(str, matchingArray)

  return cipherText
}


function generateCipherTextAlphabetArray(plainTextAlphabetArray, key) {

  const length = plainTextAlphabetArray.length
  const cipherTextAlphabetArray = plainTextAlphabetArray.map(
    (_, index) => plainTextAlphabetArray[((index + key) % length + length) % length]
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

function generateCipherText(str, matchingArray) {
  let cipherText = ''

  str.split('').forEach((stringAlphabet) => {
    let matched = false
    for (let i = 0; i < matchingArray.length; i++) {
      const array = matchingArray[i]

      if (
        stringAlphabet.toLowerCase() === array[0] &&
        stringAlphabet === stringAlphabet.toLowerCase()
      ) {
        cipherText += array[1]
        matched = true
        break // Stop iterating over remaining arrays
      } else if (
        stringAlphabet.toLowerCase() === array[0] &&
        stringAlphabet === stringAlphabet.toUpperCase()
      ) {
        cipherText += array[1].toUpperCase()
        matched = true
        break
      }
    }

    // Add the unmatched character after loop ends
    if (!matched) {
      cipherText += stringAlphabet
    }
  })

  return cipherText
}

module.exports = caesarCipher
