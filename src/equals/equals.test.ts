import {equals} from './equals'
import {state} from '../utilities'

describe('equals function', () => {
  describe('with operator', () => {
    it('should perform the operation', () => {
      expect(equals(state('1', '1', 'ADD'))).toEqual(state('2', '', ''))
      expect(equals(state('1', '1', 'SUBTRACT'))).toEqual(state('0', '', ''))
      expect(equals(state('1', '1', 'MULTIPLY'))).toEqual(state('1', '', ''))
      expect(equals(state('1', '1', 'DIVIDE'))).toEqual(state('1', '', ''))
    });
  });

  describe('without operator', () => {
    it('should return the input', () => {
      expect(equals(state('', '', ''))).toEqual(state('', '', ''))
      expect(equals(state('1', '', ''))).toEqual(state('1', '', ''))
    });
  });

  describe('without second operand', () => {
    it('should return the input', () => {
      expect(equals(state('1', '', 'ADD'))).toEqual(state('1', '', 'ADD'))
    });
  });
});