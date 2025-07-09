const calculator = {
  // Function to add two numbers
  add(x, y) {
    // Check for type
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Enter a number')
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
}

module.exports = calculator
