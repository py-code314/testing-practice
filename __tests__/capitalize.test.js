/* eslint-disable no-undef */
// Import the module
const capitalize = require('../src/capitalize')

//TODO: check input is string


// Tests
describe('capitalizeString', () => {
  it('capitalizes all lower case word', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  it('capitalizes all upper case word', () => {
    expect(capitalize('THIS')).toBe('This')
  })

  it('capitalizes mixed case word', () => {
    expect(capitalize('aNaToMy')).toBe('Anatomy')
  })

  it('capitalizes a sentence', () => {
    expect(capitalize('thIS is A TEsT SENTENCE')).toBe(
      'This is a test sentence'
    )
  })

  it('works with numbers and punctuation', () => {
    expect(capitalize("July 4 is America's Independence Day!")).toBe(
      "July 4 is america's independence day!"
    )
  })

  it('capitalizes a string with accented characters', () => {
    expect(capitalize('éclairs')).toBe('Éclairs')
  })

  it('capitalizes a single lower case character', () => {
    expect(capitalize('a')).toBe('A')
  })

  it('capitalizes a single upper case character', () => {
    expect(capitalize('A')).toBe('A')
  })

  it('works with an empty string', () => {
    expect(capitalize('')).toBe('')
  })

  it('works with spaces', () => {
    expect(capitalize('   ')).toBe('   ')
  })

  it('does not change a string starting with non-alphabet character', () => {
    expect(capitalize('!apple')).toBe('!apple')
    expect(capitalize(' hello')).toBe(' hello')
    expect(capitalize('😊smile')).toBe('😊smile')
  })
})
