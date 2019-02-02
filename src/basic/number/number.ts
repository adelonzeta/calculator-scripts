import {State}     from '../../types'
import {setNumber} from '../../utilities'

export function number(number: string, state: State): State {
  let operand1 = state.operand1
  let operand2 = state.operand2
  let operator = state.operator

  if (operator)
    operand2 = setNumber(operand2, number)
  else
    operand1 = setNumber(operand1, number)

  return {operand1, operand2, operator}
}