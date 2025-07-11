/* eslint-disable no-undef */
// Import the module
const capitalize = require('../src/capitalize')

// Tests
describe('capitalizeString', () => {
  test('capitalizes all lower case word', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  test('capitalizes all upper case word', () => {
    expect(capitalize('THIS')).toBe('This')
  })

  test('capitalizes mixed case word', () => {
    expect(capitalize('aNaToMy')).toBe('Anatomy')
  })

  test('capitalizes a mixed case sentence', () => {
    expect(capitalize('thIS is A TEsT SENTENCE')).toBe(
      'This is a test sentence'
    )
  })

  test('works with numbers and punctuation', () => {
    expect(capitalize("July 4 is America's Independence Day!")).toBe(
      "July 4 is america's independence day!"
    )
  })

  test('capitalizes a string with accented character', () => {
    expect(capitalize('éclairs')).toBe('Éclairs')
  })

  test('capitalizes a single lower case character', () => {
    expect(capitalize('a')).toBe('A')
  })

  test('capitalizes a single upper case character', () => {
    expect(capitalize('A')).toBe('A')
  })

  test('works with an empty string', () => {
    expect(capitalize('')).toBe('')
  })

  test('works with spaces', () => {
    expect(capitalize('   ')).toBe('   ')
  })

  test('capitalizes a word starting with non-alphabet character', () => {
    expect(capitalize('!apple')).toBe('!apple')
  })

  test('works with a string with leading space', () => {
    expect(capitalize(' hello')).toBe(' hello')
  })

  test('works with a string starting with emoji', () => {
    expect(capitalize('😊smile')).toBe('😊smile')
  })
})
