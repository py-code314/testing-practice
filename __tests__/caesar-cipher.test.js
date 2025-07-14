/* eslint-disable no-undef */
// Import module
const caesarCipher = require('../src/caesar-cipher')

// Tests for caesarCipher() function
describe('caesarCipher', () => {
  it('generates cipher text for a word', () => {
    expect(caesarCipher('caesar', 5)).toEqual('hfjxfw')
    expect(caesarCipher('caesar', 30)).toEqual('geiwev')
    expect(caesarCipher('caesar', 60)).toEqual('kimaiz')
  })

  it('check for text wrapping', () => {
    expect(caesarCipher('hydroxyzine', 5)).toEqual('mdiwtcdensj')
    expect(caesarCipher('wxyz', 3)).toEqual('zabc')
  })

  it('check for case preservation', () => {
    expect(caesarCipher('HeLLo', 5)).toEqual('MjQQt')
    expect(caesarCipher('CrYpToCoRnEr', 33)).toEqual('JyFwAvJvYuLy')
  })

  it('does not change non-alphabetical characters', () => {
    expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!')
  })

  it('works with empty string', () => {
    expect(caesarCipher('', 3)).toEqual('')
  })

  it('works with white space only', () => {
    expect(caesarCipher('   ', 3)).toEqual('   ')
  })

  it('works with a single character', () => {
    expect(caesarCipher('a', 3)).toEqual('d')
    expect(caesarCipher('B', 5)).toEqual('G')
    expect(caesarCipher('@', 3)).toEqual('@')
  })

  it('works with different key values', () => {
    expect(caesarCipher('hello', 0)).toEqual('hello')
    expect(caesarCipher('hello', 156)).toEqual('hello')
    expect(caesarCipher('hello', -3)).toEqual('ebiil')
  })

  it('works with unicode or accented characters', () => {
    expect(caesarCipher('éclaÏrs😁', 3)).toEqual('éfodÏuv😁')
  })

  it('works with boundary letters', () => {
    expect(caesarCipher('xyz', 3)).toEqual('abc')
    expect(caesarCipher('abc', -3)).toEqual('xyz')
    expect(caesarCipher('abc', -30)).toEqual('wxy')
  })

  it('throws error for invalid input', () => {
    expect(() => caesarCipher(123, 3)).toThrow('Input must be a string')
    expect(() => caesarCipher(null, 3)).toThrow('Input must be a string')
    expect(() => caesarCipher('hello', null)).toThrow('Input must be a number')
    expect(() => caesarCipher('hello', [])).toThrow('Input must be a number')
  })

  it('throws error for missing arguments', () => {
    expect(() => caesarCipher('hello')).toThrow('Missing arguments')
    expect(() => caesarCipher()).toThrow('Missing arguments')
  })
})
