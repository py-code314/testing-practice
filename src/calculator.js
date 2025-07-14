const calculator = {
  /* Adds two numbers together */
  add(x, y) {
    // Check for missing arguments
    if (arguments.length < 2) {
      throw new Error('Both arguments must be provided')
    }

    // Check for type of arguments
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Both arguments must be numbers')
    }

    // Check for finite numbers
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error(
        'Both arguments must be finite numbers (not NaN or Infinity)'
      )
    }

    return x + y
  },

  /* Subtracts two numbers */
  subtract(x, y) {
    // Check for missing arguments
    if (arguments.length < 2) {
      throw new Error('Both arguments must be provided')
    }

    // Check for type of arguments
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Both arguments must be numbers')
    }

    // Check for finite numbers
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error(
        'Both arguments must be finite numbers (not NaN or Infinity)'
      )
    }

    return x - y
  },

  /* Divides two numbers */
  divide(x, y) {
    // Check for missing arguments
    if (arguments.length < 2) {
      throw new Error('Both arguments must be provided')
    }

    // Check for type of arguments
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Both arguments must be numbers')
    }

    // Throw zero division error
    if (y === 0) {
      throw new Error('Cannot divide by zero')
    }

    // Check for finite numbers
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error(
        'Both arguments must be finite numbers (not NaN or Infinity)'
      )
    }

    return x / y
  },

  /* Multiplies two numbers */
  multiply(x, y) {
    // Check for missing arguments
    if (arguments.length < 2) {
      throw new Error('Both arguments must be provided')
    }

    // Check for type of arguments
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Both arguments must be numbers')
    }

    // Check for finite numbers
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error(
        'Both arguments must be finite numbers (not NaN or Infinity)'
      )
    }

    return x * y
  },
}

module.exports = calculator
