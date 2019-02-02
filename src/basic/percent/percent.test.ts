import {percent}  from './percent'
import {setState} from '../../utilities'

describe('percent function', () => {
  it('should return the percentage equivalent of the operand', () => {
    expect(percent(setState('', '', ''))).toEqual(setState('0', '', ''))
    expect(percent(setState('1', '', ''))).toEqual(setState('0.01', '', ''))
    expect(percent(setState('1', '', 'ADD'))).toEqual(setState('0.01', '', 'ADD'))
    expect(percent(setState('1', '1', 'ADD'))).toEqual(setState('1', '0.01', 'ADD'))
  });

  describe('operand is zero', () => {
    it('should return zero value', () => {
      expect(percent(setState('0', '', ''))).toEqual(setState('0', '', ''))
      expect(percent(setState('0', '', 'ADD'))).toEqual(setState('0', '', 'ADD'))
      expect(percent(setState('1', '0', 'ADD'))).toEqual(setState('1', '0', 'ADD'))
    });
  });
});