import * as fs from "node:fs";
import { resolveOutputs } from "./resolvePalettes";

const rawOutputs = process.env.INPUT_OUTPUTS ?? "";
const resolved = resolveOutputs(rawOutputs);

const githubOutputFile = process.env.GITHUB_OUTPUT;
if (!githubOutputFile) {
  throw new Error("GITHUB_OUTPUT env var not set (must run inside a GitHub Action step)");
}

// multi-line safe write, GitHub Actions heredoc format
const delimiter = "SNAKE_PALETTE_EOF";
fs.appendFileSync(
  githubOutputFile,
  `resolved_outputs<<${delimiter}\n${resolved}\n${delimiter}\n`,
);

console.log("Resolved outputs:\n" + resolved);
