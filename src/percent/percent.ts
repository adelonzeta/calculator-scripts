import {State} from '../types'

export function percent(state: State): State {
  let numberOne: string | number = state.operand1
  let numberTwo: string | number = state.operand2

  if (state.operator && state.operand2) {
    numberTwo = Number(state.operand2) / 100
    numberTwo = numberTwo.toString()
  } else {
    numberOne = Number(state.operand1) / 100
    numberOne = numberOne.toString()
  }
    
  return {
    operand1: numberOne,
    operand2: numberTwo,
    operator: state.operator
  }
}

// bug when operand is null it adds zero infront
// bug same with toggleSign function