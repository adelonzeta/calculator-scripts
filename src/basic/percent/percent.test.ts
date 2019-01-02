import {percent} from './percent'
import {state} from '../../utilities'

describe('percent function', () => {
  it('should return the percentage equivalent of the operand', () => {
    expect(percent(state('', '', ''))).toEqual(state('0', '', ''))
    expect(percent(state('1', '', ''))).toEqual(state('0.01', '', ''))
    expect(percent(state('1', '', 'ADD'))).toEqual(state('0.01', '', 'ADD'))
    expect(percent(state('1', '1', 'ADD'))).toEqual(state('1', '0.01', 'ADD'))
  });

  describe('operand is zero', () => {
    it('should return zero value', () => {
      expect(percent(state('0', '', ''))).toEqual(state('0', '', ''))
      expect(percent(state('0', '', 'ADD'))).toEqual(state('0', '', 'ADD'))
      expect(percent(state('1', '0', 'ADD'))).toEqual(state('1', '0', 'ADD'))
    });
  });
});