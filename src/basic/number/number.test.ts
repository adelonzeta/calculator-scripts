import {number}   from './number'
import {setState} from '../../utilities'

describe('number function', () => {
  describe('operand is an empty string and number is zero', () => {
    it('should return the same state', () => {
      expect(number('0', setState('', '', ''))).toEqual(setState('', '', ''))
      expect(number('0', setState('1', '', 'ADD'))).toEqual(setState('1', '', 'ADD'))
    });
  });
  describe('operand is an empty string and number is not zero', () => {
    it('should append the number', () => {
      expect(number('1', setState('', '', ''))).toEqual(setState('1', '', ''))
      expect(number('1', setState('1', '', 'ADD'))).toEqual(setState('1', '1', 'ADD'))
    });
  });

  describe('operand is zero and number is zero', () => {
    it('should replace with an empty string', () => {
      expect(number('0', setState('0', '', ''))).toEqual(setState('', '', ''))
      expect(number('0', setState('1', '0', 'ADD'))).toEqual(setState('1', '', 'ADD'))
    });
  });
  describe('operand is zero and number is not zero', () => {
    it('should replace with the number', () => {
      expect(number('1', setState('0', '', ''))).toEqual(setState('1', '', ''))
      expect(number('1', setState('1', '0', 'ADD'))).toEqual(setState('1', '1', 'ADD'))
    });
  });

  describe('operand is a number greater than zero', () => {
    it('should append the number', () => {
      expect(number('1', setState('0.01', '', ''))).toEqual(setState('0.011', '', ''))
      expect(number('1', setState('0.', '', ''))).toEqual(setState('0.1', '', ''))
      expect(number('1', setState('1', '', ''))).toEqual(setState('11', '', ''))
      expect(number('1', setState('1', '1.1', 'ADD'))).toEqual(setState('1', '1.11', 'ADD'))
      expect(number('1', setState('1', '1.', 'ADD'))).toEqual(setState('1', '1.1', 'ADD'))
      expect(number('1', setState('1', '2', 'ADD'))).toEqual(setState('1', '21', 'ADD'))
    });
  });
});