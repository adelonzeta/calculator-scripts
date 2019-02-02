export function setDecimal(operand: string): string {
  return operand ? operand + '.' : '0.'
}