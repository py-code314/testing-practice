/* Reverses a given string */
function reverseString(str) {
  // Check if the input is a string
  if (typeof str !== 'string') {
    throw new Error('Input must be a string')
  }

  return [...str].reverse().join('')
}

module.exports = reverseString
