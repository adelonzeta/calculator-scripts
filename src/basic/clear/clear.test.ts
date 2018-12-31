import {clear} from './clear'

describe('clear function', () => {
  it('should return an object', () => {
    expect(typeof clear()).toEqual('object')
  });

  describe('operandOne property', () => {
    it('should be an empty string', () => {
      expect(clear().operand1).toEqual('')
    });
  });

  describe('operandTwo property', () => {
    it('should be an empty string', () => {
      expect(clear().operand2).toEqual('')
    });
  });

  describe('operator property', () => {
    it('should be an empty string', () => {
      expect(clear().operator).toEqual('')
    });
  });
});
