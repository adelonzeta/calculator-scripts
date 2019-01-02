import {State} from '../../types'

export function percent(state: State): State {
  let operand1 = state.operand1
  let operand2 = state.operand2
  let operator = state.operator

  if (operator && operand2)
    operand2 = String(Number(operand2) / 100)
  else
    operand1 = String(Number(operand1) / 100)

  return {operand1, operand2, operator}
}