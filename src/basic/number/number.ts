import {State} from '../../types'

function newOperand(operand: string, number: string): string {
  if (operand === '0')
    return number === '0' ? '' : number
  else
    return number === '0' ? '' : operand + number
}

export function number(number: string, state: State): State {
  let operand1 = state.operand1
  let operand2 = state.operand2
  let operator = state.operator

  if (operator)
    operand2 = newOperand(operand2, number)
  else
    operand1 = newOperand(operand1, number)

  return {operand1, operand2, operator}
}