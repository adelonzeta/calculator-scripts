import {State} from '../../types'

export function number(number: string, state: State): State {
  let operand1 = state.operand1
  let operand2 = state.operand2
  let operator = state.operator
  const operand = operator ? operand2 : operand1

  if (operator && operand === '' && number !== '0')
    operand2 += number
  if (!operator && operand === '' && number !== '0')
    operand1 += number
  if (operator && operand === '0' && number === '0')
    operand2 = ''
  if (!operator && operand === '0' && number === '0')
    operand1 = ''
  if (operator && operand === '0' && number !== '0')
    operand2 = number
  if (!operator && operand === '0' && number !== '0')
    operand1 = number
  if (operator && operand > '0')
    operand2 += number
  if (!operator && operand > '0')
    operand1 += number

  return {operand1, operand2, operator}
}