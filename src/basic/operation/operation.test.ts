import {operation} from './operation'
import {state} from '../../utilities'

describe('operation function', () => {
  describe('has no operator', () => {
    it('should save the operator', () => {
      expect(operation('ADD', state('1', '', ''))).toEqual(state('1', '', 'ADD'))
      expect(operation('ADD', state('2', '', 'DIVIDE'))).toEqual(state('2', '', 'ADD'))
      expect(operation('SUBTRACT', state('3', '', ''))).toEqual(state('3', '', 'SUBTRACT'))
      expect(operation('SUBTRACT', state('4', '', 'MULTIPLY'))).toEqual(state('4', '', 'SUBTRACT'))
      expect(operation('MULTIPLY', state('5', '', ''))).toEqual(state('5', '', 'MULTIPLY'))
      expect(operation('MULTIPLY', state('6', '', 'SUBTRACT'))).toEqual(state('6', '', 'MULTIPLY'))
      expect(operation('DIVIDE', state('7', '', ''))).toEqual(state('7', '', 'DIVIDE'))
      expect(operation('DIVIDE', state('8', '', 'ADD'))).toEqual(state('8', '', 'DIVIDE'))
    });
  });

  describe('has operands and operator', () => {
    it('should calculate the result', () => {
      expect(operation('ADD', state('10', '2', 'DIVIDE'))).toEqual(state('5', '', 'ADD'))
      expect(operation('SUBTRACT', state('4', '2', 'MULTIPLY'))).toEqual(state('8', '', 'SUBTRACT'))
      expect(operation('MULTIPLY', state('6', '6', 'SUBTRACT'))).toEqual(state('0', '', 'MULTIPLY'))
      expect(operation('DIVIDE', state('8', '2', 'ADD'))).toEqual(state('10', '', 'DIVIDE'))
    });
    it('should calculate big numbers', () => {
      expect(operation('DIVIDE', state('999999999999999', '999999999999999', 'ADD'))).toEqual(state('1999999999999998', '', 'DIVIDE'))
    });
    it('should calculate decimal numbers', () => {
      expect(operation('ADD', state('1.8747', '45', 'MULTIPLY'))).toEqual(state('84.3615', '', 'ADD'))
      expect(operation('ADD', state('1.8747', '4.5', 'MULTIPLY'))).toEqual(state('8.43615', '', 'ADD'))
    });
  });

  describe('has no operands', () => {
    it('should return an empty string', () => {
      expect(operation('ADD', state('', '', ''))).toEqual(state('', '', ''))
      expect(operation('SUBTRACT', state('', '', ''))).toEqual(state('', '', ''))
      expect(operation('MULTIPLY', state('', '', ''))).toEqual(state('', '', ''))
      expect(operation('DIVIDE', state('', '', ''))).toEqual(state('', '', ''))
    });  
  });
});