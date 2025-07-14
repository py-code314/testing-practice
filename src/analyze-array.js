// Function to generate an object from an array
function analyzeArray(array) {
  const length = array.length
  if (!length) {
    throw new Error('Array must not be empty')
  }

  const result = {
    length,
    average:
      array.reduce((total, currentNumber) => {
        // Check for special numbers
        if (typeof currentNumber === 'number' && !Number.isFinite(currentNumber)) {
          throw new Error(
            'All numbers must be valid, finite numbers (not NaN or Infinity)'
          )
        }
        // Check for number inputs
        if (typeof currentNumber !== 'number') {
          throw new Error('All values must be numbers')
        }
        return total + currentNumber
      }, 0) / length,
    min: Math.min(...array),
    max: Math.max(...array),
  }

  return result
}

module.exports = analyzeArray
