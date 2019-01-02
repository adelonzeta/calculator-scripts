import {State} from '../../types'

export function negation(state: State): State {
  let operand1 = state.operand1
  let operand2 = state.operand2
  let operator = state.operator

  if (operator && operand2)
    operand2 = String(Number(operand2) * (-1))
  else
    operand1 = String(Number(operand1) * (-1))
    
  return {operand1, operand2, operator}
}