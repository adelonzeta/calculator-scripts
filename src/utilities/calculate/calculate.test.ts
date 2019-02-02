import {calculate} from './calculate'
import {setState} from '../setState/setState'

describe('calculate function', () => {
  it('returns a string', () => {
    expect(typeof calculate(setState('1', '1', 'ADD'))).toEqual('string')
  });
  
  describe('with arguments', () => {
    it('performs Division', () => {
      expect(calculate(setState('1', '1', 'DIVIDE'))).toEqual('1')
    });
    
    it('performs Multiplication', () => {
      expect(calculate(setState('6', '6', 'MULTIPLY'))).toEqual('36')
    });
  
    it('performs Subtraction', () => {
      expect(calculate(setState('100', '1', 'SUBTRACT'))).toEqual('99')
    });
  
    it('performs Addition', () => {
      expect(calculate(setState('1', '1', 'ADD'))).toEqual('2')
    });
  });

  describe('without arguments', () => {
    it('returns an error', () => {
      expect(calculate(setState('', '', ''))).toEqual('Error')
    });
  });

  describe('wrong operator', () => {
    it('returns an error', () => {
      expect(calculate(setState('1', '1', 'ADELON!'))).toEqual('Error')
    });
  });
});