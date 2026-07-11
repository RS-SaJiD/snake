// didn't want to pull in @types/node just for this, so hand-rolling
// the bare minimum types I actually use here

declare const process: {
  env: Record<string, string | undefined>;
};

declare module "node:fs" {
  export function appendFileSync(path: string, data: string): void;
}
