import { palettes } from "./palettes";

/**
 * Given one "outputs" line like:
 *   dist/snake.svg?palette=dracula
 * rewrite it to:
 *   dist/snake.svg?color_snake=%2350fa7b&color_dots=%23282a36,...
 *
 * If the palette name isn't one of ours (e.g. it's a built-in Platane
 * palette like "github-dark"), the line is returned untouched so
 * Platane/snk can resolve it itself.
 */
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

  // color_background is only meaningful for gif output. For svg it must
  // stay unset so the background stays transparent (this is what lets a
  // profile README swap between the light/dark svg via prefers-color-scheme).
  // Setting it on an svg forces an opaque background and breaks that.
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
