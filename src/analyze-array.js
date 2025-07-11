// Function to generate an object from an array
function analyzeArray(array) {
  // Initialize empty object
  const object = {}

  // Get length of array
  const length = array.length
  if (!length) {
    throw new Error('Array must not be empty')
  }
  object.length = length

  // Get total
  const total = array.reduce((previous, current) => {
    if (typeof current !== 'number') {
      throw new Error('All values must be numbers')
    }
    return previous + current
  }, 0)

  // Get average
  const average = total / length
  object.average = average

  // Get the smallest number in array
  const minNumber = Math.min(...array)
  object.min = minNumber

  // Get the largest number in array
  const maxNumber = Math.max(...array)
  object.max = maxNumber

  return object
}

module.exports = analyzeArray
