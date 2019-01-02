import {negation} from './negation'
import {state} from '../../utilities'

describe('negation function', () => {
  it('should return the reverse sign value', () => {
    expect(negation(state('1', '', ''))).toEqual(state('-1', '', ''))
    expect(negation(state('1', '1', 'ADD'))).toEqual(state('1', '-1', 'ADD'))
    expect(negation(state('-1', '', ''))).toEqual(state('1', '', ''))
    expect(negation(state('1', '-1', 'ADD'))).toEqual(state('1', '1', 'ADD'))
  });

  describe('operand1 is an empty string', () => {
    it('should return zero', () => {
      expect(negation(state('', '', ''))).toEqual(state('0', '', ''))
    });
  });
  describe('operand2 is an empty string', () => {
    it('should perform the negation on operand1 instead', () => {
      expect(negation(state('1', '', 'ADD'))).toEqual(state('-1', '', 'ADD'))
    });
  });

  describe('operand is zero', () => {
    it('should return zero value', () => {
      expect(negation(state('0', '', ''))).toEqual(state('0', '', ''))
      expect(negation(state('1', '0', 'ADD'))).toEqual(state('1', '0', 'ADD'))
    });
  });
});