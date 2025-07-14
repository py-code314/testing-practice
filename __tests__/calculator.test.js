/* eslint-disable no-undef */
// Import module
const calculator = require('../src/calculator')

// Tests for calculator
describe('Calculator', () => {
  // Tests for 'add' function
  describe('addNumbers', () => {
    it('adds two integers', () => {
      expect(calculator.add(2, 3)).toEqual(5)
      expect(calculator.add(5, -6)).toEqual(-1)
      expect(calculator.add(-5, -6)).toEqual(-11)
    })

    it('adds two floating point numbers', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3)
      expect(calculator.add(-0.5, -0.6)).toBeCloseTo(-1.1)
      expect(calculator.add(0.5, -0.6)).toBeCloseTo(-0.099)
      expect(calculator.add(-0.5, -0.6)).toBeCloseTo(-1.1)
    })

    it('handles zero values', () => {
      expect(calculator.add(-5, 0)).toEqual(-5)
      expect(calculator.add(0, 5)).toEqual(5)
      expect(calculator.add(0, 0.2)).toEqual(0.2)
      expect(calculator.add(2.6, 0)).toEqual(2.6)
      expect(calculator.add(0, 0)).toEqual(0)
    })

    it('throws error for invalid inputs', () => {
      expect(() => calculator.add('hello', 5)).toThrow('Input must be a number')
      expect(() => calculator.add(5, null)).toThrow('Input must be a number')
      expect(() => calculator.add('hello', '5')).toThrow(
        'Input must be a number'
      )
    })

    it('throws error for special numbers', () => {
      expect(() => calculator.add(NaN, 5)).toThrow(
        'Input must be a valid, finite number (not NaN or Infinity)'
      )
      expect(() => calculator.add(5, Infinity)).toThrow(
        'Input must be a valid, finite number (not NaN or Infinity)'
      )
      expect(() => calculator.add(-Infinity, 5)).toThrow(
        'Input must be a valid, finite number (not NaN or Infinity)'
      )
    })

    it('checks for missing arguments', () => {
      expect(() => calculator.add(5)).toThrow('Missing arguments')
      expect(() => calculator.add()).toThrow('Missing arguments')
    })
  })

  // Tests for 'subtract' function
  describe('subtractNumbers', () => {
    it('subtracts two positive integers', () => {
      expect(calculator.subtract(3, 3)).toEqual(0)
      expect(calculator.subtract(3, 2)).toEqual(1)
      expect(calculator.subtract(5, 6)).toEqual(-1)
    })

    it('handles negative integers', () => {
      expect(calculator.subtract(5, -6)).toEqual(11)
      expect(calculator.subtract(-6, 5)).toEqual(-11)
      expect(calculator.subtract(-5, -6)).toEqual(1)
    })

    it('handles zero values', () => {
      expect(calculator.subtract(0, -5)).toEqual(5)
      expect(calculator.subtract(5, 0)).toEqual(5)
      expect(calculator.subtract(0, -0.2)).toEqual(0.2)
      expect(calculator.subtract(2.6, 0)).toEqual(2.6)
      expect(calculator.subtract(0, 0)).toEqual(0)
      expect(calculator.subtract(-0, 0)).toEqual(-0)
    })

    it('subtracts two floating point numbers', () => {
      expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1)
      expect(calculator.subtract(-0.5, -0.6)).toBeCloseTo(0.1)
      expect(calculator.subtract(-0.5, 0.6)).toBeCloseTo(-1.1)
      expect(calculator.subtract(0.6, -0.5)).toBeCloseTo(1.1)
    })

    it('throws error for invalid input', () => {
      expect(() => calculator.subtract('hello', 5)).toThrow(
        'Input must be a number'
      )
      expect(() => calculator.subtract(5, null)).toThrow(
        'Input must be a number'
      )
    })

    it('throws error for special numbers', () => {
      expect(() => calculator.subtract(NaN, 5)).toThrow(
        'Input must be a valid, finite number (not NaN or Infinity)'
      )
      expect(() => calculator.subtract(5, Infinity)).toThrow(
        'Input must be a valid, finite number (not NaN or Infinity)'
      )
      expect(() => calculator.subtract(-Infinity, 5)).toThrow(
        'Input must be a valid, finite number (not NaN or Infinity)'
      )
    })

    it('checks for missing arguments', () => {
      expect(() => calculator.subtract(5)).toThrow('Missing arguments')
      expect(() => calculator.subtract()).toThrow('Missing arguments')
    })
  })

  // Tests for 'divide' function
  describe('divideNumbers', () => {
    it('divides two positive integers', () => {
      expect(calculator.divide(3, 3)).toEqual(1)
      expect(calculator.divide(3, 2)).toEqual(1.5)
      expect(calculator.divide(5, 6)).toBeCloseTo(0.83)
    })

    it('handles negative integers', () => {
      expect(calculator.divide(-3, -3)).toEqual(1)
      expect(calculator.divide(-3, -2)).toEqual(1.5)
      expect(calculator.divide(-5, -6)).toBeCloseTo(0.83)
      expect(calculator.divide(-5, 6)).toBeCloseTo(-0.83)
      expect(calculator.divide(5, -6)).toBeCloseTo(-0.83)
    })

    it('divides a number by zero', () => {
      expect(() => calculator.divide(0, 0)).toThrow('Zero division error')
      expect(() => calculator.divide(2, 0)).toThrow('Zero division error')
      expect(() => calculator.divide(-2, 0)).toThrow('Zero division error')
      expect(() => calculator.divide(-2.2, 0)).toThrow('Zero division error')
    })

    it('divides zero by a number', () => {
      expect(calculator.divide(0, 3)).toEqual(0)
      expect(calculator.divide(0, -2)).toEqual(-0)
      expect(calculator.divide(0, 2.5)).toEqual(0)
      expect(calculator.divide(0, -2.5)).toEqual(-0)
    })

    it('divides two floating point numbers', () => {
      expect(calculator.divide(0.1, 0.3)).toBeCloseTo(0.33)
      expect(calculator.divide(5, 2.5)).toBeCloseTo(2)
      expect(calculator.divide(2.5, 5)).toBeCloseTo(0.5)
      expect(calculator.divide(-0.5, -0.6)).toBeCloseTo(0.83)
      expect(calculator.divide(-0.5, 0.6)).toBeCloseTo(-0.83)
      expect(calculator.divide(0.6, -0.5)).toBeCloseTo(-1.2)
    })

    it('throws error for invalid input', () => {
      expect(() => calculator.divide('hello', 5)).toThrow(
        'Input must be a number'
      )
      expect(() => calculator.divide(5, null)).toThrow('Input must be a number')
    })

    it('throws error for special numbers', () => {
      expect(() => calculator.divide(NaN, 5)).toThrow(
        'Input must be a valid, finite number (not NaN or Infinity)'
      )
      expect(() => calculator.divide(5, Infinity)).toThrow(
        'Input must be a valid, finite number (not NaN or Infinity)'
      )
      expect(() => calculator.divide(-Infinity, 5)).toThrow(
        'Input must be a valid, finite number (not NaN or Infinity)'
      )
    })

    it('checks for missing arguments', () => {
      expect(() => calculator.divide(5)).toThrow('Missing arguments')
      expect(() => calculator.divide(5)).toThrow('Missing arguments')
    })
  })

  // Tests for 'multiply' function
  describe('multiplyNumbers', () => {
    it('multiplies two numbers', () => {
      expect(calculator.multiply(3, 3)).toEqual(9)
      expect(calculator.multiply(-3, -3)).toEqual(9)
      expect(calculator.multiply(3, -2)).toEqual(-6)
      expect(calculator.multiply(-3, 2)).toEqual(-6)
    })

    it('multiplies a number with zero', () => {
      expect(calculator.multiply(0, 0)).toEqual(0)
      expect(calculator.multiply(2, 0)).toEqual(0)
      expect(calculator.multiply(-2, 0)).toEqual(-0)
    })

    it('works with floating point numbers', () => {
      expect(calculator.multiply(5.5, 2.2)).toBeCloseTo(12.1)
      expect(calculator.multiply(5, 2.5)).toBeCloseTo(12.5)
      expect(calculator.multiply(-5.5, -2.2)).toBeCloseTo(12.1)
      expect(calculator.multiply(5, -2.5)).toBeCloseTo(-12.5)
    })

    it('throws error for invalid input', () => {
      expect(() => calculator.multiply('hello', 5)).toThrow('Input must be a number')
      expect(() => calculator.multiply(5, null)).toThrow(
        'Input must be a number'
      )
    })

    it('throws error for special numbers', () => {
      expect(() => calculator.multiply(NaN, 5)).toThrow(
        'Input must be a valid, finite number (not NaN or Infinity)'
      )
      expect(() => calculator.multiply(5, Infinity)).toThrow(
        'Input must be a valid, finite number (not NaN or Infinity)'
      )
      expect(() => calculator.multiply(-Infinity, 5)).toThrow(
        'Input must be a valid, finite number (not NaN or Infinity)'
      )
    })

    it('checks for missing arguments', () => {
      expect(() => calculator.multiply(5)).toThrow('Missing arguments')
      expect(() => calculator.multiply()).toThrow('Missing arguments')
    })
  })
})
