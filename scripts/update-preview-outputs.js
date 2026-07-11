const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.join(__dirname, "..");
const PALETTES_JS = path.join(REPO_ROOT, "dist", "palettes.js");
const TARGET_WORKFLOW = path.join(
  REPO_ROOT,
  ".github",
  "workflows",
  "generate-all-palette-previews.yml",
);

const START_MARKER = "# AUTO-GENERATED:START (do not edit by hand, run \"update preview outputs\" workflow instead)";
const END_MARKER = "# AUTO-GENERATED:END";

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

  const line = (name) => `            dist/${name}.svg?palette=${name}`;

  const lines = [
    ...customNames.map(line),
    ...PLATANE_OFFICIAL.map(line),
  ];

  const workflow = fs.readFileSync(TARGET_WORKFLOW, "utf8");

  const startIdx = workflow.indexOf(START_MARKER);
  const endIdx = workflow.indexOf(END_MARKER);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Could not find AUTO-GENERATED markers in ${TARGET_WORKFLOW}`);
  }

  const before = workflow.slice(0, startIdx + START_MARKER.length);
  const after = workflow.slice(endIdx);

  const updated = `${before}\n${lines.join("\n")}\n            ${after}`;

  if (updated === workflow) {
    console.log("No changes — outputs already up to date.");
    return;
  }

  fs.writeFileSync(TARGET_WORKFLOW, updated);
  console.log(
    `Updated ${path.relative(REPO_ROOT, TARGET_WORKFLOW)} with ${lines.length} outputs (${customNames.length} custom + ${PLATANE_OFFICIAL.length} platane official).`,
  );
}

main();
