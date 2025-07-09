/* eslint-disable no-undef */
// Import module
const reverseString = require('../src/reverse-string')

// Tests
describe('reverseString', () => {
  test('reverses a single word', () => {
    expect(reverseString('hello')).toEqual('olleh')
  })

  test('reverses a string with spaces', () => {
    expect(reverseString('Good Morning All')).toEqual('llA gninroM dooG')
  })

  test('reverses a single character', () => {
    expect(reverseString('a')).toEqual('a')
  })

  test('reverses a palindrome', () => {
    expect(reverseString('malayalam')).toEqual('malayalam')
  })

  test('reverses a string with emojis', () => {
    expect(reverseString('😊😂🎉')).toEqual('🎉😂😊')
  })

  test('reverses a string with accents', () => {
    expect(reverseString('Éclairs')).toEqual('srialcÉ')
  })

  test('reverses a string with numbers and punctuation', () => {
    expect(reverseString("!T'S a v*st #OC3AN!")).toEqual("!NA3CO# ts*v a S'T!")
  })

  test('works with empty string', () => {
    expect(reverseString('')).toEqual('')
  })

  test('works with spaces', () => {
    expect(reverseString('   ')).toEqual('   ')
  })
})
