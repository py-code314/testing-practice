/* Analyzes an array of numbers and returns an object */
function analyzeArray(array) {
  const length = array.length
  if (!length) {
    throw new Error('Array must not be empty')
  }

  const result = {
    length,
    average:
      // Calculate the total first
      array.reduce((total, currentNumber) => {
        // Check for non-numerical values
        if (typeof currentNumber !== 'number') {
          throw new Error('All values must be numbers')
        }

        // Check for finite numbers
        if (!Number.isFinite(currentNumber)) {
          throw new Error(
            'All numbers must be valid, finite numbers (not NaN or Infinity)'
          )
        }

        return total + currentNumber
      }, 0) / length,
    min: Math.min(...array),
    max: Math.max(...array),
  }

  return result
}

module.exports = analyzeArray
