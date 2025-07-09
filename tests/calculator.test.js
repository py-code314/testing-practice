/* eslint-disable no-undef */
// Import module
const calculator = require('../src/calculator')

// Tests
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
