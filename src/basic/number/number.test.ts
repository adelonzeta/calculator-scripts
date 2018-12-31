import {number} from './number'
import {state} from '../../utilities'

describe('number function', () => {
  describe('operand is an empty string and number is zero', () => {
    it('should return the same state', () => {
      expect(number('0', state('', '', ''))).toEqual(state('', '', ''))
      expect(number('0', state('1', '', 'ADD'))).toEqual(state('1', '', 'ADD'))
    });
  });
  describe('operand is an empty string and number is not zero', () => {
    it('should append the number', () => {
      expect(number('1', state('', '', ''))).toEqual(state('1', '', ''))
      expect(number('1', state('1', '', 'ADD'))).toEqual(state('1', '1', 'ADD'))
    });
  });

  describe('operand is zero and number is zero', () => {
    it('should replace with an empty string', () => {
      expect(number('0', state('0', '', ''))).toEqual(state('', '', ''))
      expect(number('0', state('1', '0', 'ADD'))).toEqual(state('1', '', 'ADD'))
    });
  });
  describe('operand is zero and number is not zero', () => {
    it('should replace with the number', () => {
      expect(number('1', state('0', '', ''))).toEqual(state('1', '', ''))
      expect(number('1', state('1', '0', 'ADD'))).toEqual(state('1', '1', 'ADD'))
    });
  });

  describe('operand is a number greater than zero', () => {
    it('should append the number', () => {
      expect(number('1', state('0.01', '', ''))).toEqual(state('0.011', '', ''))
      expect(number('1', state('0.', '', ''))).toEqual(state('0.1', '', ''))
      expect(number('1', state('1', '', ''))).toEqual(state('11', '', ''))
      expect(number('1', state('1', '1.1', 'ADD'))).toEqual(state('1', '1.11', 'ADD'))
      expect(number('1', state('1', '1.', 'ADD'))).toEqual(state('1', '1.1', 'ADD'))
      expect(number('1', state('1', '2', 'ADD'))).toEqual(state('1', '21', 'ADD'))
    });
  });
});