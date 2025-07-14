/* Takes a string and returns it with the first character capitalized */
function capitalize(str) {
  // Check if the input is a string
  if (typeof str !== 'string') {
    throw new Error('Input must be a string')
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

module.exports = capitalize
