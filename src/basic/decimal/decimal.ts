import {State} from '../../types'

function operand(state: State): string {
  return state.operator ? state.operand2 : state.operand1
}

function isDecimal(operand: string): boolean {
  return operand.indexOf('.') !== -1
}

function newOperand(operand: string): string {
  return operand ? operand + '.' : '0.'
}

export function decimal(state: State): State {  
  let operand1  = state.operand1
  let operand2  = state.operand2
  let operator  = state.operator
  let notDecimal = !isDecimal(operand(state))

  if (operator && notDecimal)
    operand2 = newOperand(operand2)
  if (!operator && notDecimal)
    operand1 = newOperand(operand1)

  return {operand1, operand2, operator}
}