import { test, expect } from 'vitest'

// const link = process.env.LINK || 'localhost:3000'

function sum (a, b) {
  return a + b
}

test('adds 1 + 2 equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
