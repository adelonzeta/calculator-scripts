export interface State {
  operand1: string,
  operand2: string,
  operator: string
}

export interface Result {
  result: string
}

export interface StateHook {
  state: State,
  dispatch: (newState: any) => void
}