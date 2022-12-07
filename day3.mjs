import { readFileSync } from "node:fs";

const lines = readFileSync("day3.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline

function letterToPriority(letter) {
  if (/[a-z]/.test(letter)) {
    letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 65 + 27;
  }
}

function part1() {
  const res = lines.map((line) => {
    const halfOne = [...line.slice(0, line.length / 2)];
    const halfTwo = [...line.slice(line.length / 2)];

    let halfOneSet = new Set(halfOne);
    const intersection = halfTwo.filter((x) => halfOneSet.has(x));
    const dedub = [...new Set(intersection)];

    return letterToPriority(dedub[0]);
  });
  console.log(res.reduce((a, b) => a + b, 0));
}

function part2() {
  //do something here
}

part1();
part2();
