import {State} from '../../types'

export function useOperand(state: State): string {
  return state.operator ? state.operand2 : state.operand1
}