import {State} from '../../types'

export function calculate(state: State): string {
  const num1 = Number(state.operand1)
  const num2 = Number(state.operand2)
  
  switch (state.operator) {
    case 'DIVIDE'  : return String(num1 / num2)
    case 'MULTIPLY': return String(num1 * num2)
    case 'SUBTRACT': return String(num1 - num2)
    case 'ADD'     : return String(num1 + num2)
    default        : return 'Error'
  }
}