import { defineConfig, Options } from "tsup";
import path from "path";
import fs from "fs";

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
};

export default defineConfig((): Options[] => {
  const AllFolders = getAllFolderNames(Path);
  return AllFolders.map((folder) => {
    return {
      ...defaultConfig,
      entry: [`${__dirname}/src/${folder}/index.ts`],
      outDir: `public/${folder}`,
    };
  });
});

const Path = path.join(__dirname, "src");
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