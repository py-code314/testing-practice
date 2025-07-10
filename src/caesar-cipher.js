// Function to generate cipher text
function caesarCipher(string, key) {
  const plainTextAlphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const cipherTextAlphabetArray = generateCipherTextAlphabetArray(
    plainTextAlphabetArray,
    key
  )

  const cipherText = generateCipherText(
    string,
    plainTextAlphabetArray,
    cipherTextAlphabetArray
  )

  return cipherText
}

function generateCipherTextAlphabetArray(plainTextAlphabetArray, key) {
  const cipherTextAlphabetArray = plainTextAlphabetArray.map((_, index) =>
    index + key <= 25
      ? plainTextAlphabetArray[index + key]
      : plainTextAlphabetArray[(index + key) % 26]
  )

  return cipherTextAlphabetArray
}

function generateCipherText(
  string,
  plainTextAlphabetArray,
  cipherTextAlphabetArray
) {
  let cipherText = ''
  string.split('').forEach((stringAlphabet) => {
    plainTextAlphabetArray.forEach((plainAlphabet) => {
      if (stringAlphabet.toLowerCase() === plainAlphabet) {
        const index = plainTextAlphabetArray.indexOf(
          stringAlphabet.toLowerCase()
        )
        const cipherAlphabet = cipherTextAlphabetArray[index]
        if (stringAlphabet === stringAlphabet.toUpperCase()) {
          cipherText += cipherAlphabet.toUpperCase()
        } else {
          cipherText += cipherAlphabet
        }
      }
    })
  })

  return cipherText
}

module.exports = caesarCipher