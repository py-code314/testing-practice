/* eslint-disable no-undef */
// Import module
const calculator = require('../src/calculator')

// Tests for 'add' function
describe('addNumbers', () => {
  test('adds two positive numbers', () => {
    expect(calculator.add(2, 3)).toEqual(5)
    expect(calculator.add(5, 6)).toEqual(11)
  })

  test('adds one positive, one negative number', () => {
    expect(calculator.add(5, -6)).toEqual(-1)
  })

  test('adds two negative numbers', () => {
    expect(calculator.add(-5, -6)).toEqual(-11)
  })

  test('adds a positive or negative number to zero', () => {
    expect(calculator.add(-5, 0)).toEqual(-5)
    expect(calculator.add(5, 0)).toEqual(5)
  })

  test('adds two floating point numbers', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3)
    expect(calculator.add(-0.5, -0.6)).toBeCloseTo(-1.1)
  })

  test('adds zero to a floating point number', () => {
    expect(calculator.add(0, 0.2)).toEqual(0.2)
    expect(calculator.add(0, -2.6)).toEqual(-2.6)
  })

  test('checks for numbers as both arguments', () => {
    expect(() => calculator.add('hello', 5)).toThrow(Error)
    expect(() => calculator.add(5, null)).toThrow(Error)
    expect(() => calculator.add('hello', '5')).toThrow(Error)
  })

  test('checks for missing arguments', () => {
    expect(() => calculator.add(5)).toThrow(Error)
    expect(() => calculator.add()).toThrow(Error)
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

  test('divide a number by zero', () => {
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

  test('divides two floating point numbers', () => {
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
