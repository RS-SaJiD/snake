#!/usr/bin/env bun
 /*
 Expands `?palette=<name>` in an `outputs` string into explicit
 color_background / color_dots / color_snake / color_dot_border params,
 using the palettes bundled with this action (see ../../palettes.ts,
 relative to this action's own repo — not the caller's repo).
 This lets anyone who uses this action reference the custom palettes
 defined here, the same way they would reference a Platane/snk
 built-in palette.
*/

import { palettes } from "../../palettes";

const raw = process.env.SNAKE_RAW_OUTPUTS ?? "";

const lines = raw
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

if (lines.length === 0) {
  throw new Error(
    "The `outputs` input was empty when it reached this action. " +
      "Check that the workflow calling this action passes an `outputs:` value.",
  );
}

const resolved = lines.map((line) => {
  const [filePart, queryPart] = line.split("?");
  const sp = new URLSearchParams(queryPart ?? "");

  const paletteName = sp.get("palette");

  if (paletteName) {
    const palette = palettes[paletteName as keyof typeof palettes];

    if (!palette) {
      throw new Error(
        `Unknown palette: "${paletteName}". Available: ${Object.keys(palettes).join(", ")}`,
      );
    }

    sp.delete("palette");
    sp.set("color_background", palette.colorBackground);
    sp.set("color_dot_border", palette.colorDotBorder);
    sp.set("color_dots", palette.colorDots.join(","));
    sp.set("color_snake", palette.colorSnake);
  }

  const query = sp.toString();
  return query ? `${filePart}?${query}` : filePart;
});

console.log(resolved.join("\n"));
