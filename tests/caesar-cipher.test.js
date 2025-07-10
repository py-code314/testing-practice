/* eslint-disable no-undef */
// Import module
const caesarCipher = require('../src/caesar-cipher')

// Tests
describe('caesarCipher', () => {
  test('generates cipher text for a word', () => {
    expect(caesarCipher('caesar', 5)).toEqual('hfjxfw')
    expect(caesarCipher('caesar', 30)).toEqual('geiwev')
    expect(caesarCipher('caesar', 60)).toEqual('kimaiz')
  })

  test('check for text wrapping', () => {
    expect(caesarCipher('hydroxyzine', 5)).toEqual('mdiwtcdensj')
    expect(caesarCipher('wxyz', 3)).toEqual('zabc')
  })

  test('check for case preservation', () => {
    expect(caesarCipher('HeLLo', 5)).toEqual('MjQQt')
    expect(caesarCipher('CrYpToCoRnEr', 33)).toEqual('JyFwAvJvYuLy')
  })

})