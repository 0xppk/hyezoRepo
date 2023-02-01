import { defineConfig, Options } from "tsup";
import path from "path";

const env = process.env.NODE_ENV;
const defaultConfig: Options = {
  splitting: true, // currently only works with the esm output format
  treeshake: true, // automatically removes unreachable code
  clean: true, // clean up the output folder
  dts: true, // generate dts files
  format: ["cjs", "esm"], // generate cjs and esm files
  minify: env === "production", // minify the output size
  bundle: env === "production",
  skipNodeModulesBundle: true,
  watch: env === "development",
  target: "es2020",
  tsconfig: path.resolve(__dirname, "./tsconfig.json"),
  outDir: `public`,
};

export default defineConfig([
  {
    ...defaultConfig,
  },
]);
