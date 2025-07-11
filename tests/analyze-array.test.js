/* eslint-disable no-undef */
// Import module
const analyzeArray = require('../src/analyze-array')

// Tests
describe('analyzeArray', () => {
  test('outputs an object from an array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
    expect(analyzeArray([11,80,33,46])).toEqual({average: 42.5, min: 11, max: 80, length: 4})
  })

  

  test('array has few negative values', () => {
    const result = analyzeArray([1, -8, 3, 4, -2, 6])
    expect(result.average).toBeCloseTo(0.666, 2)
    expect(result.min).toEqual(-8)
    expect(result.max).toEqual(6)
    expect(result.length).toEqual(6)
  })

  test('array has all negative values', () => {
    expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toEqual({
      average: -4,
      min: -8,
      max: -1,
      length: 6,
    })
  })

  test('works with floating point numbers', () => {
    const result = analyzeArray([1, 8.5, 3, 4.0, 2.1])
    expect(result.average).toBeCloseTo(3.720, 2)
    expect(result.min).toEqual(1)
    expect(result.max).toEqual(8.5)
    expect(result.length).toEqual(5)
  })

  test('array has a few zero values', () => {
    const result = analyzeArray([-1, 0, 3, -4, 0, 6])
    expect(result.average).toBeCloseTo(0.666, 2)
    expect(result.min).toEqual(-4)
    expect(result.max).toEqual(6)
    expect(result.length).toEqual(6)
  })

  test('array has all zero values', () => {
    expect(analyzeArray([0, 0, 0, 0])).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 4,
    })
  })

  test('array has all zero values', () => {
    expect(analyzeArray([2, 2, 2, 2])).toEqual({
      average: 2,
      min: 2,
      max: 2,
      length: 4,
    })
  })

  test('array has only one value', () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    })
  })

  test('throws an error for empty array', () => {
    expect(() => analyzeArray([])).toThrow('Array must not be empty')
  })

  test('throws an error for non-numerical values', () => {
    expect(() => analyzeArray([null, 4, 8, 2])).toThrow('All values must be numbers')
  })

  test('throws an error for special numbers', () => {
    expect(() => analyzeArray([4, NaN, 2])).toThrow('All values must be numbers')
    expect(() => analyzeArray([4, Infinity, 2])).toThrow('All values must be numbers')
  })


})