import * as fs from "node:fs";

//The forklifts can only access a roll of paper if there are fewer than four rolls of paper in the eight adjacent positions.
//How many rolls of paper can be accessed by a forklift?

try {
  const data = fs.readFileSync("./day4/input.txt", "utf8");
  const rows = data.split(`\n`);
  const arr = [];

  for (const row of rows) {
    arr.push(row);
  }
  console.log(arr);
} catch (error) {
  console.log(error);
}
