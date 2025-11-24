const isValidSudokuNumber = (num: number): boolean => {
  if (!Number.isInteger(num)) return false
  return num >= 1 && num <= 9
}

export default isValidSudokuNumber
