import {negation} from './negation'
import {setState} from '../../utilities'

describe('negation function', () => {
  it('should return the reverse sign value', () => {
    expect(negation(setState('1', '', ''))).toEqual(setState('-1', '', ''))
    expect(negation(setState('1', '1', 'ADD'))).toEqual(setState('1', '-1', 'ADD'))
    expect(negation(setState('-1', '', ''))).toEqual(setState('1', '', ''))
    expect(negation(setState('1', '-1', 'ADD'))).toEqual(setState('1', '1', 'ADD'))
  });

  describe('operand1 is an empty string', () => {
    it('should return zero', () => {
      expect(negation(setState('', '', ''))).toEqual(setState('0', '', ''))
    });
  });
  describe('operand2 is an empty string', () => {
    it('should perform the negation on operand1 instead', () => {
      expect(negation(setState('1', '', 'ADD'))).toEqual(setState('-1', '', 'ADD'))
    });
  });

  describe('operand is zero', () => {
    it('should return zero value', () => {
      expect(negation(setState('0', '', ''))).toEqual(setState('0', '', ''))
      expect(negation(setState('1', '0', 'ADD'))).toEqual(setState('1', '0', 'ADD'))
    });
  });
});