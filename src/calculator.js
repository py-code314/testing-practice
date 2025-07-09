const calculator = {
  add(x, y) {
    // Check for type
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Enter a number')
    }

    return x + y
  },
}

module.exports = calculator
