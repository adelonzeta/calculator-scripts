import {calculate} from '../../utilities'
import {State} from '../../types'

export function equals(state: State): State {
  let operand1 = state.operand1
  let operand2 = state.operand2
  let operator = state.operator

  if (operand1 && operand2 && operator) {
    operand1 = calculate(state)
    operand2 = ''
    operator = ''
  }
  
  return {operand1, operand2, operator}
}