import {decimal}  from './decimal'
import {setState} from '../../utilities'

describe('decimal function', () => {
  describe('operand is an empty string', () => {
    it('should append zero and decimal point', () => {
      expect(decimal(setState('', '', ''))).toEqual(setState('0.', '', ''))
      expect(decimal(setState('1', '', 'ADD'))).toEqual(setState('1', '0.', 'ADD'))
    });
  });

  describe('operand is a whole number', () => {
    it('should append a decimal point', () => {
      expect(decimal(setState('1', '', ''))).toEqual(setState('1.', '', ''))
      expect(decimal(setState('1', '1', 'ADD'))).toEqual(setState('1', '1.', 'ADD'))
    });
  });
  
  describe('operand has a decimal point', () => {
    it('should return the same state', () => {
      expect(decimal(setState('1.0', '', ''))).toEqual(setState('1.0', '', ''))
      expect(decimal(setState('1', '1.0', 'ADD'))).toEqual(setState('1', '1.0', 'ADD'))
    });
  });
});