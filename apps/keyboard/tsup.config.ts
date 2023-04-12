import { defineConfig, Options } from "tsup";
import path from "path";

export default defineConfig(
  (): Options => ({
    splitting: true, // currently only works with the esm output format
    treeshake: true, // automatically removes unreachable code
    format: ["cjs", "esm"], // generate cjs and esm files
    minify: true, // minify the output size
    minifyWhitespace: true,
    minifySyntax: true,
    minifyIdentifiers: true,
    bundle: true,
    skipNodeModulesBundle: true,
    external: ["react"],
    target: "es2020",
    tsconfig: path.resolve(__dirname, "./tsconfig.json"),
    entry: ["server/firebase-messaging-sw.ts"],
    outDir: `public`,
  }),
);
