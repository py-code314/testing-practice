// Function to return a capitalized string
function capitalize(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string')
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

module.exports = capitalize
