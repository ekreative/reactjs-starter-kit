/* eslint-env jest */
import { isEmailValid, isPasswordValid } from './validation'

describe('email validation', () => {
  describe('email is valid', () => {
    it('standart email', () => {expect(isEmailValid('test@test.com')).toBe(true)})
    it('with numbers email', () => {expect(isEmailValid('1234@test.com')).toBe(true)})
  })
  describe('email is invalid', () => {
    it('empty email', () => {expect(isEmailValid('')).toBe(false)})
    it('without @ email', () => {expect(isEmailValid('test')).toBe(false)})
    it('number email', () => {expect(isEmailValid(1234)).toBe(false)})
    it('space in email', () => {expect(isEmailValid('test @ test.com')).toBe(false)})
    it('without dot email', () => {expect(isEmailValid('test@test')).toBe(false)})
  })
})

describe('password validation', () => {
  describe('password is valid', () => {
    it('ok password', () => {expect(isPasswordValid('Password12345678')).toBe(true)})
    it('enough password', () => {expect(isPasswordValid('assWord911')).toBe(true)})
  })
  describe('password is invalid', () => {
    it('empty password', () => {expect(isPasswordValid('')).toBe(false)})
    it('short password', () => {expect(isPasswordValid('Pass123')).toBe(false)})
    it('space in password', () => {expect(isPasswordValid('test Resr 123')).toBe(false)})
    it('special symbols in password', () => {expect(isPasswordValid('^$^%$^^')).toBe(false)})
  })

})
