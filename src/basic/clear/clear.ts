import {State} from '../../types'

export function clear(): State {
  return {
    operand1: '',
    operand2: '',
    operator: ''
  }
}