import { palettes } from "./palettes";

// turns "dist/snake.svg?palette=dracula" into the actual color params
// snk expects. if palette isn't one of mine (like "github-dark"), just
// pass it through as-is
export const resolveLine = (line: string): string => {
  const trimmed = line.trim();
  if (!trimmed) return trimmed;

  const [filePart, queryPart] = trimmed.split("?");
  if (!queryPart) return trimmed;

  const params = new URLSearchParams(queryPart);
  const paletteName = params.get("palette");

  const palette = paletteName ? palettes[paletteName] : undefined;
  if (!palette) return trimmed;

  params.delete("palette");
  if (!params.has("color_snake")) params.set("color_snake", palette.colorSnake);
  if (!params.has("color_dots"))
    params.set("color_dots", palette.colorDots.join(","));
  if (!params.has("color_dot_border"))
    params.set("color_dot_border", palette.colorDotBorder);

  // don't set this for svg or it kills the transparent bg (breaks the
  // light/dark auto-swap in READMEs). only matters for gifs anyway
  const isGif = filePart.trim().toLowerCase().endsWith(".gif");
  if (isGif && !params.has("color_background")) {
    params.set("color_background", palette.colorBackground);
  }

  return `${filePart}?${params.toString()}`;
};

export const resolveOutputs = (raw: string): string =>
  raw
    .split("\n")
    .map((line) => resolveLine(line))
    .filter(Boolean)
    .join("\n");
