const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.join(__dirname, "..");
const PALETTES_JS = path.join(REPO_ROOT, "dist", "palettes.js");

const PLATANE_OFFICIAL = [
  "github-dark",
  "github-light",
  "gitlab-dark",
  "gitlab-light",
  "forgejo-dark",
  "forgejo-light",
  "codeberg-dark",
  "codeberg-light",
];

function main() {
  const { palettes } = require(PALETTES_JS);
  const customNames = Object.keys(palettes);

  const line = (name) => `dist/${name}.svg?palette=${name}`;
  const lines = [...customNames.map(line), ...PLATANE_OFFICIAL.map(line)];
  const list = lines.join("\n");

  console.log(
    `Built outputs list: ${customNames.length} custom + ${PLATANE_OFFICIAL.length} platane official = ${lines.length} total`,
  );

  const githubOutputFile = process.env.GITHUB_OUTPUT;
  if (!githubOutputFile) {
    console.log(list);
    return;
  }

  const delimiter = "SNAKE_OUTPUTS_EOF";
  fs.appendFileSync(
    githubOutputFile,
    `list<<${delimiter}\n${list}\n${delimiter}\n`,
  );
}

main();
