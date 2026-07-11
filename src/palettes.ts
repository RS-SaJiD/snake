export type Palette = {
  colorBackground: string;
  colorDotBorder: string;
  colorEmpty: string;
  colorDots: [string, string, string, string, string];
  colorSnake: string;
};

// RS-SaJiD's custom palettes
export const palettes: Record<string, Palette> = {
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
    colorSnake: "#f906d6",
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
  gruvbox: {
    colorBackground: "#282828",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#282828",
    colorDots: ["#282828", "#d79921", "#d65d0e", "#cc241d", "#98971a"],
    colorSnake: "#fabd2f",
  },
  "rose-pine": {
    colorBackground: "#191724",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#191724",
    colorDots: ["#191724", "#ebbcba", "#f6c177", "#c4a7e7", "#eb6f92"],
    colorSnake: "#9ccfd8",
  },
  "solarized-dark": {
    colorBackground: "#002b36",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#002b36",
    colorDots: ["#002b36", "#268bd2", "#2aa198", "#b58900", "#cb4b16"],
    colorSnake: "#859900",
  },
  cyberpunk: {
    colorBackground: "#0d0221",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#0d0221",
    colorDots: ["#0d0221", "#ff003c", "#00fff9", "#f706cf", "#fee801"],
    colorSnake: "#05d9e8",
  },
  sakura: {
    colorBackground: "#fff5f7",
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#fff5f7",
    colorDots: ["#fff5f7", "#ffd1dc", "#ffb3c6", "#ff8fab", "#ff4d6d"],
    colorSnake: "#6b4226",
  },
  "black-and-white-dark": {
    colorBackground: "#141414",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#141414",
    colorDots: ["#141414", "#404040", "#6b6b6b", "#a0a0a0", "#d6d6d6"],
    colorSnake: "#f2f2f2",
  },
  "black-and-white-light": {
    colorBackground: "#f4f4f4",
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#f4f4f4",
    colorDots: ["#f4f4f4", "#d0d0d0", "#a0a0a0", "#6b6b6b", "#333333"],
    colorSnake: "#1a1a1a",
  },
  "electric-violet": {
    colorBackground: "#10001a",
    colorDotBorder: "#ffffff10",
    colorEmpty: "#10001a",
    colorDots: ["#10001a", "#3b0764", "#6b21a8", "#a855f7", "#e879f9"],
    colorSnake: "#e0aaff",
  },
};
