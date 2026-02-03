import * as fs from 'node:fs'

class Solution {
  static invalidSum = 0

  static isInvalid(input: string): boolean {
    const repeatRegex = /^(.+)\1+$/
    return repeatRegex.test(input)
  }
}

try {
  const data = fs.readFileSync('./day2/input.txt', 'utf8')
  const nums = data.split(',')

  for (const num of nums) {
    const [start, end] = num.split('-')
    for (let i = Number(start); i <= Number(end); i++) {
      if (Solution.isInvalid(String(i))) {
        Solution.invalidSum += i
      }
    }
  }
  console.log(Solution.invalidSum)
} catch (error) {
  console.log(error)
}
