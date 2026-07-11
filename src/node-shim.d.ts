// Minimal ambient declarations so this compiles without @types/node
// (this sandbox has no network access to fetch @types/node).
// These are erased at compile time and only describe the exact
// surface this project actually uses.

declare const process: {
  env: Record<string, string | undefined>;
};

declare module "node:fs" {
  export function appendFileSync(path: string, data: string): void;
}
