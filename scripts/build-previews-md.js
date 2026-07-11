const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.join(__dirname, "..");
const PALETTES_JS = path.join(REPO_ROOT, "dist", "palettes.js");
const OUT_FILE = path.join(REPO_ROOT, "dist", "PREVIEWS.md");

const BASE_URL =
  "https://raw.githubusercontent.com/RS-SaJiD/snake/snake-assets";

const OTHER_PLATANE_PAIRS = ["gitlab", "forgejo", "codeberg"];

const img = (name) => `

![${name}](${BASE_URL}/${name}.svg)

`;

function pairBlock(base, dark, light) {
  return `#### ${base}\n\n\n${img(dark)}\n\n\n\n${img(light)}\n\n`;
}

function singleBlock(name) {
  return `#### ${name}\n\n\n${img(name)}\n\n`;
}

function main() {
  const { palettes } = require(PALETTES_JS);
  const names = Object.keys(palettes);

  const handled = new Set();
  const pairs = [];
  for (const name of names) {
    if (name.endsWith("-dark")) {
      const base = name.slice(0, -"-dark".length);
      const lightName = `${base}-light`;
      if (names.includes(lightName)) {
        pairs.push({ base, dark: name, light: lightName });
        handled.add(name);
        handled.add(lightName);
      }
    }
  }
  const singles = names.filter((n) => !handled.has(n));

  let md = "";
  md += "### Custom palettes (by me)\n\n";
  md += "#### github <-- (Platane's official, not mine)\n\n\n";
  md += `${img("github-dark")}\n\n\n\n`;
  md += `${img("github-light")}\n\n\n`;

  for (const { base, dark, light } of pairs) {
    md += pairBlock(base, dark, light);
  }
  for (const name of singles) {
    md += singleBlock(name);
  }

  md += "---\n\n";
  md += "### Other Platane official palettes\n\n";
  for (const base of OTHER_PLATANE_PAIRS) {
    md += pairBlock(base, `${base}-dark`, `${base}-light`);
  }

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, md.trimEnd() + "\n");
  console.log(
    `Wrote ${path.relative(REPO_ROOT, OUT_FILE)} — ${pairs.length} pairs, ${singles.length} singles, ${OTHER_PLATANE_PAIRS.length} platane-official pairs.`,
  );
}

main();
