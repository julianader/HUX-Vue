import { describe, it, expect } from 'vitest'
import isValidSudokuNumber from './isValidSudokuNumber'

describe('isValidSudokuNumber', () => {
  it('returns true for integers 1 through 9', () => {
    for (let i = 1; i <= 9; i++) {
      expect(isValidSudokuNumber(i)).toBe(true)
    }
  })

  it('returns false for integers outside 1-9', () => {
    expect(isValidSudokuNumber(0)).toBe(false)
    expect(isValidSudokuNumber(10)).toBe(false)
    expect(isValidSudokuNumber(-5)).toBe(false)
    expect(isValidSudokuNumber(100)).toBe(false)
  })

  it('returns false for non-integers and special numbers', () => {
    expect(isValidSudokuNumber(1.5)).toBe(false)
    expect(isValidSudokuNumber(NaN)).toBe(false)
    expect(isValidSudokuNumber(Number.POSITIVE_INFINITY)).toBe(false)
    expect(isValidSudokuNumber(Number.NEGATIVE_INFINITY)).toBe(false)
  })
})
