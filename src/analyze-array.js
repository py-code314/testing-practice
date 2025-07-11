// Function to generate an object from an array
function analyzeArray(array) {
  // Initialize empty object
  const object = {}

  // Get total
  const total = array.reduce((previous, current) => previous + current, 0)

  // Get length of array
  const length = array.length
  object.length = length

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
