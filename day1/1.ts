/*
Dial spans 0 - 99
Dial starts at 50
Dial has a pointer to a specific marker (number)
Function takes a list of instruction strings (L30, R45 etc)
  Function Calculates the number of times the pointer lands on 0
  Function returns an integer 
*/

import * as fs from "node:fs";

try {
  const data = fs.readFileSync("./day1/input.txt", "utf8");
  const lines = data.trim().split("\n");
  console.log(getPassword(lines));
} catch (error) {
  console.log(error);
}

function getPassword(input: string[]): number {
  let pointer = 50;
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    let direction = input[i].charAt(0);
    let distance = parseInt(input[i].slice(1));

    if (direction === "R") {
      pointer = (pointer + distance) % 100;
    } else if (direction === "L") {
      pointer = (((pointer - distance) % 100) + 100) % 100;
    }
    if (pointer === 0) {
      count += 1;
    }
  }
  return count;
}
