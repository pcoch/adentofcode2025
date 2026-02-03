import * as fs from 'node:fs'

try {
  const data = fs.readFileSync('./day3/input.txt', 'utf8')
  const banks = data.split(`\n`)
  let outputArr = []

  for (const bank of banks) {
    let largest = 0
    let largestIndex = 0
    let secondLargest = 0

    for (let i = 0; i < bank.length - 1; i++) {
      if (Number(bank[i]) > largest) {
        largest = Number(bank[i])
        largestIndex = i
      }
    }

    for (let j = largestIndex + 1; j <= bank.length; j++) {
      if (Number(bank[j]) > secondLargest) {
        secondLargest = Number(bank[j])
      }
    }
    outputArr.push(Number(String(largest) + String(secondLargest)))
  }

  console.log(outputArr)
  const totalOutput = outputArr.reduce((acc, num) => acc + num, 0)
  console.log(totalOutput)
} catch (error) {
  console.log(error)
}
