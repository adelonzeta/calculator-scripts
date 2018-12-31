import {State} from '../../types'

export function toggleSign(state: State): State {
  let numberOne: string | number = state.operand1
  let numberTwo: string | number = state.operand2

  if (state.operator && state.operand2) {
    numberTwo = Number(state.operand2) * (-1)
    numberTwo = numberTwo.toString()
  } else {
    numberOne = Number(state.operand1) * (-1)
    numberOne = numberOne.toString()
  }
    
  return {
    operand1: numberOne,
    operand2: numberTwo,
    operator: state.operator
  }
}