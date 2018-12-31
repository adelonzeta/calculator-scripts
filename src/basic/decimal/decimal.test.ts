import {decimal} from './decimal'
import {state} from '../../utilities'

describe('decimal function', () => {
  describe('when operand is a null string', () => {
    it('should append zero and decimal point', () => {
      expect(decimal(state('', '', ''))).toEqual(state('0.', '', ''))
      expect(decimal(state('1', '', 'ADD'))).toEqual(state('1', '0.', 'ADD'))
    });
  });

  describe('when operand is a whole number', () => {
    it('should append a decimal point', () => {
      expect(decimal(state('1', '', ''))).toEqual(state('1.', '', ''))
      expect(decimal(state('1', '1', 'ADD'))).toEqual(state('1', '1.', 'ADD'))
    });
  });
  
  describe('when operand has a decimal point', () => {
    it('should return the same state', () => {
      expect(decimal(state('1.0', '', ''))).toEqual(state('1.0', '', ''))
      expect(decimal(state('1', '1.0', 'ADD'))).toEqual(state('1', '1.0', 'ADD'))
    });
  });
});