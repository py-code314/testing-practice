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
    })

    it('handles zero values', () => {
      expect(calculator.add(-5, 0)).toEqual(-5)
      expect(calculator.add(5, 0)).toEqual(5)
      expect(calculator.add(0, 0.2)).toEqual(0.2)
      expect(calculator.add(0, -2.6)).toEqual(-2.6)
      expect(calculator.add(0, 0)).toEqual(0)
    })

    it('throws error for invalid inputs', () => {
      expect(() => calculator.add('hello', 5)).toThrow('Input must be a number')
      expect(() => calculator.add(5, null)).toThrow('Input must be a number')
      expect(() => calculator.add('hello', '5')).toThrow('Input must be a number')
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
    test('subtracts two positive numbers', () => {
      expect(calculator.subtract(3, 3)).toEqual(0)
      expect(calculator.subtract(3, 2)).toEqual(1)
      expect(calculator.subtract(5, 6)).toEqual(-1)
      expect(calculator.subtract(0, 0)).toEqual(0)
    })

    test('subtracts one positive, one negative number', () => {
      expect(calculator.subtract(5, -6)).toEqual(11)
      expect(calculator.subtract(-6, 5)).toEqual(-11)
      expect(calculator.subtract(-5, -6)).toEqual(1)
      expect(calculator.subtract(-0, 0)).toEqual(-0)
    })

    test('subtracts two negative numbers', () => {
      expect(calculator.subtract(-5, -6)).toEqual(1)
    })

    test('subtracts a positive or negative number from zero', () => {
      expect(calculator.subtract(0, -5)).toEqual(5)
      expect(calculator.subtract(0, 5)).toEqual(-5)
    })

    test('subtracts zero from a positive or negative number', () => {
      expect(calculator.subtract(5, 0)).toEqual(5)
      expect(calculator.subtract(-5, 0)).toEqual(-5)
    })

    test('subtracts two floating point numbers', () => {
      expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1)
      expect(calculator.subtract(-0.5, -0.6)).toBeCloseTo(0.1)
      expect(calculator.subtract(-0.5, 0.6)).toBeCloseTo(-1.1)
      expect(calculator.subtract(0.6, -0.5)).toBeCloseTo(1.1)
    })

    test('subtracts a zero from a floating point number', () => {
      expect(calculator.subtract(0, 0.2)).toEqual(-0.2)
      expect(calculator.subtract(0, -2.6)).toEqual(2.6)
    })

    test('checks for numbers as both arguments', () => {
      expect(() => calculator.subtract('hello', 5)).toThrow(Error)
      expect(() => calculator.subtract(5, null)).toThrow(Error)
      expect(() => calculator.subtract('hello', NaN)).toThrow(Error)
    })

    test('checks for missing arguments', () => {
      expect(() => calculator.subtract(5)).toThrow(Error)
      expect(() => calculator.subtract()).toThrow(Error)
    })
  })

  // Tests for 'divide' function
  describe('divideNumbers', () => {
    test('divides two positive numbers', () => {
      expect(calculator.divide(3, 3)).toEqual(1)
      expect(calculator.divide(3, 2)).toEqual(1.5)
      expect(calculator.divide(5, 6)).toBeCloseTo(0.83)
    })

    test('divides two negative numbers', () => {
      expect(calculator.divide(-3, -3)).toEqual(1)
      expect(calculator.divide(-3, -2)).toEqual(1.5)
      expect(calculator.divide(-5, -6)).toBeCloseTo(0.83)
    })

    test('divides a number by zero', () => {
      expect(() => calculator.divide(0, 0)).toThrow(Error)
      expect(() => calculator.divide(2, 0)).toThrow(Error)
      expect(() => calculator.divide(-2, 0)).toThrow(Error)
    })

    test('divides zero by a number', () => {
      expect(calculator.divide(0, 3)).toEqual(0)
      expect(calculator.divide(0, -2)).toEqual(-0)
      expect(calculator.divide(0, 2.5)).toEqual(0)
    })

    test('divides one positive, one negative number', () => {
      expect(calculator.divide(5, -6)).toBeCloseTo(-0.83)
      expect(calculator.divide(-6, 5)).toEqual(-1.2)
    })

    test('handles floating point division', () => {
      expect(calculator.divide(5.5, 2.2)).toBeCloseTo(2.5)
      expect(calculator.divide(5, 2.5)).toBeCloseTo(2)
    })

    test('handles floating point numbers', () => {
      expect(calculator.divide(0.1, 0.3)).toBeCloseTo(0.33)
      expect(calculator.divide(-0.5, -0.6)).toBeCloseTo(0.83)
      expect(calculator.divide(-0.5, 0.6)).toBeCloseTo(-0.83)
      expect(calculator.divide(0.6, -0.5)).toBeCloseTo(-1.2)
    })

    test('checks for numbers as both arguments', () => {
      expect(() => calculator.divide('hello', 5)).toThrow(Error)
      expect(() => calculator.divide(5, null)).toThrow(Error)
      expect(() => calculator.divide('hello', NaN)).toThrow(Error)
    })

    test('checks for missing arguments', () => {
      expect(() => calculator.divide(5)).toThrow(Error)
      expect(() => calculator.divide()).toThrow(Error)
    })
  })

  // Tests for 'multiply' function
  describe('multiplyNumbers', () => {
    test('multiplies two positive numbers', () => {
      expect(calculator.multiply(3, 3)).toEqual(9)
    })

    test('handles negative numbers', () => {
      expect(calculator.multiply(-3, -3)).toEqual(9)
      expect(calculator.multiply(3, -2)).toEqual(-6)
      expect(calculator.multiply(-3, 2)).toEqual(-6)
    })

    test('multiplies a number with zero', () => {
      expect(calculator.multiply(0, 0)).toEqual(0)
      expect(calculator.multiply(2, 0)).toEqual(0)
      expect(calculator.multiply(-2, 0)).toEqual(-0)
    })

    test('multiplies one positive, one negative number', () => {
      expect(calculator.multiply(5, -6)).toEqual(-30)
    })

    test('handles floating point numbers', () => {
      expect(calculator.multiply(5.5, 2.2)).toBeCloseTo(12.1)
      expect(calculator.multiply(5, 2.5)).toBeCloseTo(12.5)
      expect(calculator.multiply(-5.5, -2.2)).toBeCloseTo(12.1)
      expect(calculator.multiply(5, -2.5)).toBeCloseTo(-12.5)
    })

    test('throws error when x or y is not a number', () => {
      expect(() => calculator.multiply('hello', 5)).toThrow(Error)
      expect(() => calculator.multiply(5, null)).toThrow(Error)
      expect(() => calculator.multiply('hello', NaN)).toThrow(Error)
    })

    test('checks for missing arguments', () => {
      expect(() => calculator.multiply(5)).toThrow(Error)
      expect(() => calculator.multiply()).toThrow(Error)
    })
  })
})

