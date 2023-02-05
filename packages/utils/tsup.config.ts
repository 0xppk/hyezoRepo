import { defineConfig, Options } from "tsup";
import path from "path";
import fs from "fs";

const Path = path.join(__dirname, "src");
const env = process.env.NODE_ENV;

const getAllFolderNames = (dir: string): string[] => {
  const allFileNames = fs.readdirSync(dir);
  const allFolderNames = allFileNames.reduce((acc: string[], each: string) => {
    const fullPath = path.join(dir, each);
    const isDirectory = fs.statSync(fullPath).isDirectory();
    if (isDirectory) return [...acc, ...getAllFolderNames(fullPath), each];
    else return [...acc];
  }, []);
  return allFolderNames;
};

const defaultConfig: Options = {
  splitting: true, // currently only works with the esm output format
  treeshake: true, // automatically removes unreachable code
  clean: true, // clean up the output folder
  dts: true, // generate dts files
  format: ["cjs", "esm"], // generate cjs and esm files
  minify: true, // minify the output size
  minifyWhitespace: true,
  minifySyntax: true,
  minifyIdentifiers: true,
  bundle: true,
  skipNodeModulesBundle: true,
  watch: env === "development",
  target: "es2020",
  tsconfig: path.resolve(__dirname, "./tsconfig.json"),
};

export default defineConfig((): Options[] => {
  const allFolders = getAllFolderNames(Path);
  return allFolders.map(folder => {
    return {
      ...defaultConfig,
      entry: [`${__dirname}/src/${folder}/**/*.{ts,tsx}`],
      outDir: `public/${folder}`,
    };
  });
});
