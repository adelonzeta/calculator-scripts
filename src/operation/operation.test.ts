import {operation} from './operation'    
// OPERATIONS => 'ADD' || 'SUBTRACT' || 'MULTIPLY' || 'DIVIDE'
// it should work without operands => null, null, null || 'OPERATIONS'
// it should work with only the first operand => 1, null, null || 'OPERATIONS'
// it should calculate the result -> 1, 1, null || 'OPERATIONS'

function state(o1: string, o2: string, o: string) {
  return {operand1: o1, operand2: o2, operator: o}
}

it('should return null without operands', () => {
  expect(operation('ADD', state('', '', ''))).toEqual(state('', '', ''))
  expect(operation('SUBTRACT', state('', '', ''))).toEqual(state('', '', ''))
  expect(operation('MULTIPLY', state('', '', ''))).toEqual(state('', '', ''))
  expect(operation('DIVIDE', state('', '', ''))).toEqual(state('', '', ''))
});

it('should work with only the first operand', () => {
  expect(operation('ADD', state('1', '', ''))).toEqual(state('1', '', 'ADD'))
  expect(operation('ADD', state('2', '', 'DIVIDE'))).toEqual(state('2', '', 'ADD'))
  expect(operation('SUBTRACT', state('3', '', ''))).toEqual(state('3', '', 'SUBTRACT'))
  expect(operation('SUBTRACT', state('4', '', 'MULTIPLY'))).toEqual(state('4', '', 'SUBTRACT'))
  expect(operation('MULTIPLY', state('5', '', ''))).toEqual(state('5', '', 'MULTIPLY'))
  expect(operation('MULTIPLY', state('6', '', 'SUBTRACT'))).toEqual(state('6', '', 'MULTIPLY'))
  expect(operation('DIVIDE', state('7', '', ''))).toEqual(state('7', '', 'DIVIDE'))
  expect(operation('DIVIDE', state('8', '', 'ADD'))).toEqual(state('8', '', 'DIVIDE'))
});

it('should calculate the result', () => {
  expect(operation('ADD', state('10', '2', 'DIVIDE'))).toEqual(state('5', '', 'ADD'))
  expect(operation('SUBTRACT', state('4', '2', 'MULTIPLY'))).toEqual(state('8', '', 'SUBTRACT'))
  expect(operation('MULTIPLY', state('6', '6', 'SUBTRACT'))).toEqual(state('0', '', 'MULTIPLY'))
  expect(operation('DIVIDE', state('8', '2', 'ADD'))).toEqual(state('10', '', 'DIVIDE'))
});

it('should calculate big numbers', () => {
  // expect(operation('ADD', state(10, 2, 'DIVIDE'))).toEqual(state(5, null, 'ADD'))
  // expect(operation('SUBTRACT', state(4, 2, 'MULTIPLY'))).toEqual(state(8, null, 'SUBTRACT'))
  // expect(operation('MULTIPLY', state(6, 6, 'SUBTRACT'))).toEqual(state(0, null, 'MULTIPLY'))
  expect(operation('DIVIDE', state('999999999999999', '999999999999999', 'ADD'))).toEqual(state('1999999999999998', '', 'DIVIDE'))
});

it('should return string values', () => {
  let op = operation('ADD', state('1', '', 'ADD'))
  expect(typeof op.operand1).toEqual('string')
});

it.skip('should calculate decimals', () => {
  
});