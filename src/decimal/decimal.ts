import {State} from '../types'

export function decimal(period: string, {operand1, operand2, operator}: State): State {
  let numberOne = operand1
  let numberTwo = operand2
  
  if (operator) {
    if (operand2) {
      if (numberTwo.indexOf(period) === -1) numberTwo += period
    } else {
      numberTwo = '0' + period
    }
  } else {
    if (operand1) {
      if (numberOne.indexOf(period) === -1) numberOne += period
    } else {
      numberOne = '0' + period
    }
  }

  return {
    operand1: numberOne,
    operand2: numberTwo,
    operator: operator
  }
}