import {State} from '../../types'
import {calculate} from '../../utilities'

export function operation(newOperator: string, state: State): State {
  const hasOperands    = state.operand1 && state.operand2
  const activeOperator = state.operator || newOperator
  let operand1 = state.operand1
  let operand2 = state.operator ? '' : state.operand2
  let operator = state.operand1 ? newOperator : ''

  if (hasOperands) {
    operand1 = calculate({
      operand1: state.operand1,
      operand2: state.operand2,
      operator: activeOperator
    })
  }
  
  return {operand1, operand2, operator}
}