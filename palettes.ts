export const basePalettes = {
  "github-light": {
    colorBackground: "#ffffff",
    colorDotBorder: "#1b1f230a",
    colorDots: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    colorEmpty: "#ebedf0",
    colorSnake: "purple",
  },
  "github-dark": {
    colorBackground: "#0c1116",
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#161b22",
    colorDots: ["#161b22", "#01311f", "#034525", "#0f6d31", "#00c647"],
    colorSnake: "purple",
  },
  "forgejo-light": {
    colorBackground: "#ffffff",
    colorDotBorder: "#00000010",
    colorEmpty: "#d4d4d8",
    colorDots: ["#d4d4d8", "#fdba74", "#f97316", "#c2410c", "#7c2d12"],
    colorSnake: "#7c2d12",
  },
  "forgejo-dark": {
    colorBackground: "#1f2937",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#2b3642",
    colorDots: ["#2b3642", "#9a3412", "#ea580c", "#fb923c", "#fed7aa"],
    colorSnake: "#fed7aa",
  },
  "codeberg-light": {
    colorBackground: "#ffffff",
    colorDotBorder: "#00000010",
    colorEmpty: "#d0d7de",
    colorDots: ["#d0d7de", "#8db5dc", "#679cd0", "#4183c4", "#254f77"],
    colorSnake: "#254f77",
  },
  "codeberg-dark": {
    colorBackground: "#161b22",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#3b444a",
    colorDots: ["#3b444a", "#254f77", "#31699f", "#4183c4", "#8db5dc"],
    colorSnake: "#8db5dc",
  },
  "gitlab-light": {
    colorBackground: "#ffffff",
    colorDotBorder: "#00000010",
    colorEmpty: "#edebe6",
    colorDots: ["#edebe6", "#9dc7f1", "#428fdc", "#2f68b4", "#284779"],
    colorSnake: "#284779",
  },
  "gitlab-dark": {
    colorBackground: "#1f1e24",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#2a2a36",
    colorDots: ["#2a2a36", "#284779", "#2f68b4", "#428fdc", "#9dc7f1"],
    colorSnake: "#9dc7f1",
  },
};

// RS-SaJiD's palettes
export const SaJiDpalettes = {
  "red-github-dark": {
    colorBackground: "#0c1116",
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#161b22",
    colorDots: ["#161b22", "#310101", "#450303", "#6d0f0f", "#c60000"],
    colorSnake: "#e6edf3",
  },
  "red-github-light": {
    colorBackground: "#ffffff",
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#ebedf0",
    colorDots: ["#ebedf0", "#e99b9b", "#c44040", "#a13030", "#6e2121"],
    colorSnake: "#2f363d",
  },
  "halloween-dark": {
    colorBackground: "#0c1116",
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#161b22",
    colorDots: ["#161b22", "#631c03", "#bd561d", "#fa7a18", "#fddf68"],
    colorSnake: "#bc8cff",
  },
  "halloween-light": {
    colorBackground: "#ffffff",
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#ebedf0",
    colorDots: ["#ebedf0", "#ffee4a", "#ffc501", "#fe9600", "#03001c"],
    colorSnake: "#03001c",
  },
  "winter-dark": {
    colorBackground: "#0c1116",
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#161b22",
    colorDots: ["#161b22", "#0a3069", "#0969da", "#54aeff", "#b6e3ff"],
    colorSnake: "#7ee787",
  },
  "winter-light": {
    colorBackground: "#ffffff",
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#ebedf0",
    colorDots: ["#ebedf0", "#b6e3ff", "#54aeff", "#0969da", "#0a3069"],
    colorSnake: "#fd8c00",
  },
  "one-dark-pro": {
    colorBackground: "#282c34",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#282c34",
    colorDots: ["#282c34", "#61afef", "#98c379", "#c678dd", "#56b6c2"],
    colorSnake: "#d19a66",
  },
  synthwave: {
    colorBackground: "#262335",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#262335",
    colorDots: ["#262335", "#ff7edb", "#fede5d", "#36f9f6", "#fe4450"],
    colorSnake: "#241b2f",
  },
  dracula: {
    colorBackground: "#282a36",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#282a36",
    colorDots: ["#282a36", "#6272a4", "#bd93f9", "#ff79c6", "#ff5555"],
    colorSnake: "#50fa7b",
  },
  monokai: {
    colorBackground: "#272822",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#272822",
    colorDots: ["#272822", "#75715e", "#fd971f", "#a6e22e", "#f92672"],
    colorSnake: "#e6db74",
  },
  nord: {
    colorBackground: "#2e3440",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#2e3440",
    colorDots: ["#2e3440", "#3b4252", "#4c566a", "#81a1c1", "#88c0d0"],
    colorSnake: "#a3be8c",
  },
  "tokyo-night": {
    colorBackground: "#1a1b2e",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#1a1b2e",
    colorDots: ["#1a1b2e", "#1f2335", "#364a82", "#7aa2f7", "#bb9af7"],
    colorSnake: "#9ece6a",
  },
  catppuccin: {
    colorBackground: "#1e1e2e",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#1e1e2e",
    colorDots: ["#1e1e2e", "#313244", "#cba6f7", "#89b4fa", "#94e2d5"],
    colorSnake: "#a6e3a1",
  },
};

// aliases
export const palettes = {
  ...basePalettes,
  ...SaJiDpalettes,

  // aliases
  github: basePalettes["github-light"],
  forgejo: basePalettes["forgejo-light"],
  codeberg: basePalettes["codeberg-light"],
  gitlab: basePalettes["gitlab-light"],
  default: basePalettes["github-light"],
};

// CLI resolver — used by action.yml to resolve palette colors at runtime
const name = process.argv[2] ?? "github-dark";
const palette = palettes[name] ?? palettes["github-dark"];

if (!palettes[name]) {
  console.error(`Unknown palette: "${name}". Falling back to github-dark.`);
}

console.log(`color_dots=${palette.colorDots.join(",")}`);
console.log(`color_snake=${palette.colorSnake}`);
console.log(`color_background=${palette.colorBackground}`);
