import {State} from '../../types'

export function operation(operator: string, state: State): State {
  const number1 = Number(state.operand1)
  const number2 = Number(state.operand2)
  const hasOperands = state.operand1 && state.operand2
  const existingOperator = state.operator || operator
  let result = state.operand1
  let next = state.operator ? '' : state.operand2
  let newOperator = state.operand1 ? operator : ''

  if (hasOperands && (existingOperator === 'DIVIDE')) result = String(number1 / number2)
  if (hasOperands && (existingOperator === 'MULTIPLY')) result = String(number1 * number2)
  if (hasOperands && (existingOperator === 'SUBTRACT')) result = String(number1 - number2)
  if (hasOperands && (existingOperator === 'ADD')) result = String(number1 + number2)
  
  return {
    operand1: result, 
    operand2: next, 
    operator: newOperator
  }
}