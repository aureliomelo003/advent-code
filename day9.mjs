import { readFileSync } from "node:fs";

const lines = readFileSync("day9.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map((line) => {
    const [letter, number] = line.split(" ");
    return {
      direction: letter,
      totalMoves: parseInt(number),
    };
  }); // Parse each line into a number

  const movesDefinition = {
    R: {
      x: 1,
      y: 0,
    },
    L: {
      x: -1,
      y: 0,
    },
    U: {
      x: 0,
      y: -1,
    },
    D: {
      x: 0,
      y: 1,
    },
  };

  class Point {
    constructor(x, y)
  }
function part1() {
  //do something here
}

function part2() {
  //do something here
}

part1();
part2();
