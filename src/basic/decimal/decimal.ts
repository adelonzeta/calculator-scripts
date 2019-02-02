import {State} from '../../types'
import {isDecimal, setDecimal, useOperand} from '../../utilities'

export function decimal(state: State): State {  
  let operand1  = state.operand1
  let operand2  = state.operand2
  let operator  = state.operator
  let notDecimal = !isDecimal(useOperand(state))

  if (operator && notDecimal)
    operand2 = setDecimal(operand2)
  if (!operator && notDecimal)
    operand1 = setDecimal(operand1)

  return {operand1, operand2, operator}
}