import {equals}   from './equals'
import {setState} from '../../utilities'

describe('equals function', () => {
  describe('with operator', () => {
    it('should perform the operation', () => {
      expect(equals(setState('1', '1', 'ADD'))).toEqual(setState('2', '', ''))
      expect(equals(setState('1', '1', 'SUBTRACT'))).toEqual(setState('0', '', ''))
      expect(equals(setState('1', '1', 'MULTIPLY'))).toEqual(setState('1', '', ''))
      expect(equals(setState('1', '1', 'DIVIDE'))).toEqual(setState('1', '', ''))
    });
  });

  describe('without operator', () => {
    it('should return the input', () => {
      expect(equals(setState('', '', ''))).toEqual(setState('', '', ''))
      expect(equals(setState('1', '', ''))).toEqual(setState('1', '', ''))
    });
  });

  describe('without second operand', () => {
    it('should return the input', () => {
      expect(equals(setState('1', '', 'ADD'))).toEqual(setState('1', '', 'ADD'))
    });
  });
});