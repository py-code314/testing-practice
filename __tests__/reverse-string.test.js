/* eslint-disable no-undef */
// Import module
const reverseString = require('../src/reverse-string')

// Tests for reverseString()
describe('reverseString', () => {
  it('reverses a single word', () => {
    expect(reverseString('hello')).toEqual('olleh')
  })

  it('reverses a string with spaces', () => {
    expect(reverseString('Good Morning All')).toEqual('llA gninroM dooG')
  })

  it('reverses a single character', () => {
    expect(reverseString('a')).toEqual('a')
  })

  it('reverses a palindrome', () => {
    expect(reverseString('malayalam')).toEqual('malayalam')
  })

  it('reverses a string with emojis', () => {
    expect(reverseString('😊😂🎉')).toEqual('🎉😂😊')
  })

  it('reverses a string with accents', () => {
    expect(reverseString('Éclairs')).toEqual('srialcÉ')
  })

  it('reverses a string with numbers and punctuation', () => {
    expect(reverseString("!T'S a v*st #OC3AN!")).toEqual("!NA3CO# ts*v a S'T!")
  })

  it('works with empty string', () => {
    expect(reverseString('')).toEqual('')
  })

  it('works with white spaces', () => {
    expect(reverseString('   ')).toEqual('   ')
  })

  it('throws error if input is not a string', () => {
    expect(() => reverseString(null)).toThrow('Input must be a string')
  })
})
