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
})