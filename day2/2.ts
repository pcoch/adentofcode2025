import * as fs from 'node:fs'

class Solution {
  static invalidNums: number[] = []
  /**
   * Checks if a string consists of a sequence of characters repeated exactly twice.
   * @param input - The string to check
   * @returns True if the string is two identical halves, false otherwise
   * @example
   * checkTwiceDuplicateSequence('22')     // true
   * checkTwiceDuplicateSequence('123123') // true
   * checkTwiceDuplicateSequence('1212')   // true
   * checkTwiceDuplicateSequence('1243')   // false
   * checkTwiceDuplicateSequence('111')    // false (odd length)
   */
  static isInvalid(input: string): boolean {
    const length = input.length

    if (length % 2 === 0) {
      const mid = Math.floor(length / 2)
      const half1 = input.substring(0, mid)
      const half2 = input.substring(mid)

      if (half1 === half2) {
        return true
      }
    }
    return false
  }
}

try {
  const data = fs.readFileSync('./day2/input.txt', 'utf8')
  const nums = data.split(',')

  for (const num of nums) {
    const [start, end] = num.split('-')
    for (let i = Number(start); i <= Number(end); i++) {
      if (Solution.isInvalid(String(i))) {
        Solution.invalidNums.push(i)
      }
    }
  }
  const result = Solution.invalidNums.reduce((acc, num) => acc + num, 0)
  console.log(result)
} catch (error) {
  console.log(error)
}
