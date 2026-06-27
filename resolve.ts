import { palettes } from "./palettes.ts";

const name = process.argv[2] ?? "github-dark";
const palette = palettes[name] ?? palettes["github-dark"];

if (!palettes[name]) {
  console.error(`Unknown palette: "${name}". Falling back to github-dark.`);
}

console.log(`color_dots=${palette.colorDots.join(",")}`);
console.log(`color_snake=${palette.colorSnake}`);
console.log(`color_background=${palette.colorBackground}`);
