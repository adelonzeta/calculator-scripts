import {calculate} from './calculate'
import {state} from '../state/state'

describe('calculate function', () => {
  it('returns a string', () => {
    expect(typeof calculate(state('1', '1', 'ADD'))).toEqual('string')
  });
  
  describe('with arguments', () => {
    it('performs Division', () => {
      expect(calculate(state('1', '1', 'DIVIDE'))).toEqual('1')
    });
    
    it('performs Multiplication', () => {
      expect(calculate(state('6', '6', 'MULTIPLY'))).toEqual('36')
    });
  
    it('performs Subtraction', () => {
      expect(calculate(state('100', '1', 'SUBTRACT'))).toEqual('99')
    });
  
    it('performs Addition', () => {
      expect(calculate(state('1', '1', 'ADD'))).toEqual('2')
    });
  });

  describe('without arguments', () => {
    it('returns an error', () => {
      expect(calculate(state('', '', ''))).toEqual('Error')
    });
  });

  describe('wrong operator', () => {
    it('returns an error', () => {
      expect(calculate(state('1', '1', 'ADELON!'))).toEqual('Error')
    });
  });
});