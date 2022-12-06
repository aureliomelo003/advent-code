import { readFileSync } from "node:fs";

const lines = readFileSync("day3.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline

function part1() {
  lines.map((line) => {
    const halfOne = line.slice(0, line.length / 2);
    const halfTwo = line.slice(line.length / 2);
    console.log({halfOne, halfTwo});
  })
}

function part2() {
  //do something here
}

part1();
part2();
