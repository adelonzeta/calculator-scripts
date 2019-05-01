import {operation} from './operation'
import {setState}  from '../../utilities'

describe('operation function', () => {
  describe('has no operator', () => {
    it('should save the operator', () => {
      expect(operation('ADD', setState('1', '', ''))).toEqual(setState('1', '', 'ADD'))
      expect(operation('ADD', setState('2', '', 'DIVIDE'))).toEqual(setState('2', '', 'ADD'))
      expect(operation('SUBTRACT', setState('3', '', ''))).toEqual(setState('3', '', 'SUBTRACT'))
      expect(operation('SUBTRACT', setState('4', '', 'MULTIPLY'))).toEqual(setState('4', '', 'SUBTRACT'))
      expect(operation('MULTIPLY', setState('5', '', ''))).toEqual(setState('5', '', 'MULTIPLY'))
      expect(operation('MULTIPLY', setState('6', '', 'SUBTRACT'))).toEqual(setState('6', '', 'MULTIPLY'))
      expect(operation('DIVIDE', setState('7', '', ''))).toEqual(setState('7', '', 'DIVIDE'))
      expect(operation('DIVIDE', setState('8', '', 'ADD'))).toEqual(setState('8', '', 'DIVIDE'))
    });
  });

  describe('has operands and operator', () => {
    it('should calculate the result', () => {
      expect(operation('ADD', setState('10', '2', 'DIVIDE'))).toEqual(setState('5', '', 'ADD'))
      expect(operation('SUBTRACT', setState('4', '2', 'MULTIPLY'))).toEqual(setState('8', '', 'SUBTRACT'))
      expect(operation('MULTIPLY', setState('6', '6', 'SUBTRACT'))).toEqual(setState('0', '', 'MULTIPLY'))
      expect(operation('DIVIDE', setState('8', '2', 'ADD'))).toEqual(setState('10', '', 'DIVIDE'))
    });
    it('should calculate big numbers', () => {
      expect(operation('DIVIDE', setState('999999999999999', '999999999999999', 'ADD'))).toEqual(setState('1999999999999998', '', 'DIVIDE'))
    });
    it('should calculate decimal numbers', () => {
      expect(operation('ADD', setState('1.8747', '45', 'MULTIPLY'))).toEqual(setState('84.3615', '', 'ADD'))
      expect(operation('ADD', setState('1.8747', '4.5', 'MULTIPLY'))).toEqual(setState('8.43615', '', 'ADD'))
    });
  });

  describe('has no operands', () => {
    it('should return an empty string', () => {
      ['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE'].forEach(operand => {
        expect(operation(operand, setState('', '', ''))).toEqual(setState('', '', ''))
      })
    });
  });
});
