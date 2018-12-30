import {State} from '../types'

export function number(number: number, state: State): State {
  let numberString = String(number)
  let numberOne = state.operand1
  let numberTwo = state.operand2
  
  if (state.operator) {
    if (state.operand2) {
      numberTwo = state.operand2 === '0' ? numberString : state.operand2 + numberString
    } else {
      numberTwo = numberString
    }
  } else {
    if (state.operand1) {
      numberOne = state.operand1 + numberString
    } else {
      numberOne = number === 0 ? '' : numberString
    }
  }

  return {
    operand1: numberOne,
    operand2: numberTwo,
    operator: state.operator
  }
}