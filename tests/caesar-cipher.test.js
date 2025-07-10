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
})