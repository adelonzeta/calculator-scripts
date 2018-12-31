import {number} from './number'

// should work without operator
// should work with operator
// should work with existing value

function state(o1: string, o2: string, o: string) {
  return {operand1: o1, operand2: o2, operator: o}
}

it('should always save a string value', () => {
  let sampleInput = number(1, state('2', '', ''))
  expect(typeof sampleInput.operand1).toEqual('string')
})

it('should work without operator', () => {
  expect(number(1, state('', '', ''))).toEqual(state('1', '', ''))
  expect(number(7, state('', '', ''))).toEqual(state('7', '', ''))
});

it('should work with operator', () => {
  expect(number(1, state('', '', 'ADD'))).toEqual(state('', '1', 'ADD'))
  expect(number(9, state('1', '', 'ADD'))).toEqual(state('1', '9', 'ADD'))
});

it('should work with existing value', () => {
  expect(number(1, state('1', '', ''))).toEqual(state('11', '', ''))
  expect(number(9, state('', '1', 'ADD'))).toEqual(state('', '19', 'ADD'))
  expect(number(9, state('1', '1', 'ADD'))).toEqual(state('1', '19', 'ADD'))
});