export function setNumber(operand: string, number: string): string {
  if (operand === '0')
    return number === '0' ? '' : number
  else
    return number === '0' ? '' : operand + number
}