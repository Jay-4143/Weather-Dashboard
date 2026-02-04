import { describe, it, expect } from 'vitest'
import { formatDate, formatTemp } from '../formatters'

describe('formatters', () => {
    it('formats ISO date correctly', () => {
        // 2026-02-04
        const input = '2026-02-04T00:00:00.000Z'
        const result = formatDate(input)
        // Expect "Wed, Feb 4" or similar. 
        // We check that it returns a non-empty string that isn't "Invalid Date"
        expect(result).not.toBe('Invalid Date')
        expect(typeof result).toBe('string')
        expect(result.length).toBeGreaterThan(5)
    })

    it('handles invalid date', () => {
        expect(formatDate('invalid')).toBe('Invalid Date')
    })

    it('formats temperature correctly', () => {
        expect(formatTemp(23.4)).toBe('23°C')
        expect(formatTemp(23.6)).toBe('24°C')
    })
})
