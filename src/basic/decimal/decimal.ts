import {State} from '../../types'

function operand(state: State): string {
  return state.operator ? state.operand2 : state.operand1
}

function isDecimal(operand: string): boolean {
  return operand.indexOf('.') !== -1
}

export function decimal(state: State): State {  
  let operand1  = state.operand1
  let operand2  = state.operand2
  let operator  = state.operator
  const period  = '.'
  // const operand = operator ? operand2 : operand1
  // const decimal = operand(state).indexOf(period) !== -1
  const decimal= isDecimal(operand(state))

  if (operator && operand2 && !decimal)
    operand2 += period
  if (operator && !operand2 && !decimal)
    operand2 = '0' + period
  if (!operator && operand1 && !decimal)
    operand1 += period
  if (!operator && !operand1 && !decimal)
    operand1 = '0' + period

  return {operand1, operand2, operator}
}