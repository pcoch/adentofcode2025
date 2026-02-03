import * as fs from "node:fs";

try {
  const data = fs.readFileSync("./day3/input.txt", "utf8");
  const banks = data.split(`\n`);
  const result = [];

  /**
   * Finds the largest 12 numbers in sequence within a string
   * @param bank - string of numbers to traverse (e.g '438090230222423321')
   * @returns string of numbers representing the largest overall number
   */
  function findLargestSequence(bank: string): string {
    let result = "";
    let largest = 0;
    let currentIndex = 0;

    while (result.length < 12) {
      const startFrom = result.length === 0 ? currentIndex : currentIndex + 1;

      for (let i = startFrom; i < bank.length - 11 + result.length; i++) {
        if (Number(bank[i]) > largest) {
          largest = Number(bank[i]);
          currentIndex = i;
        }
      }
      result += largest;
      largest = 0;
    }
    return result;
  }

  //loop thru each bank and find largest sequence for each bank
  for (const bank of banks) {
    result.push(Number(findLargestSequence(bank)));
  }

  const totalOutput = result.reduce((acc, num) => acc + num, 0);
  console.log(totalOutput);
} catch (error) {
  console.log(error);
}
