const calculator = {
  // Function to add two numbers
  add(x, y) {
    // Check for missing arguments
    if (arguments.length < 2) {
      throw new Error('Missing arguments')
    }
    // Check for type
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Input must be a number')
    }

    // Check for finite numbers
    if (
      (typeof x === 'number' && !Number.isFinite(x)) ||
      (typeof y === 'number' && !Number.isFinite(y))
    ) {
      throw new Error(
        'Input must be a valid, finite number (not NaN or Infinity)'
      )
    }
      return x + y
  },
  // Function to subtract two numbers
  subtract(x, y) {
    // Check for type
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Enter a number')
    }

    return x - y
  },
  // Function to divide two numbers
  divide(x, y) {
    // Check for type
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Enter a number')
    }
    // Throw zero division error
    if (y === 0) {
      throw new Error('Zero division error')
    }

    return x / y
  },
  // Function to multiply two numbers
  multiply(x, y) {
    // Check for type
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Enter a number')
    }

    return x * y
  },
}

module.exports = calculator
