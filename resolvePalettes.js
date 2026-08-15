"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveOutputs = exports.resolveLine = void 0;
const palettes_1 = require("./palettes");
// turns "dist/snake.svg?palette=dracula" into the actual color params
// snk expects. if palette isn't one of mine (like "github-dark"), just
// pass it through as-is
const resolveLine = (line) => {
    const trimmed = line.trim();
    if (!trimmed)
        return trimmed;
    const [filePart, queryPart] = trimmed.split("?");
    if (!queryPart)
        return trimmed;
    const params = new URLSearchParams(queryPart);
    const paletteName = params.get("palette");
    const palette = paletteName ? palettes_1.palettes[paletteName] : undefined;
    if (!palette)
        return trimmed;
    params.delete("palette");
    if (!params.has("color_snake"))
        params.set("color_snake", palette.colorSnake);
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
exports.resolveLine = resolveLine;
const resolveOutputs = (raw) => raw
    .split("\n")
    .map((line) => (0, exports.resolveLine)(line))
    .filter(Boolean)
    .join("\n");
exports.resolveOutputs = resolveOutputs;
