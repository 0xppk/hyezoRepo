import fs from "fs";
import { resolve } from "path";
const __dirname = resolve();

(function main() {
  const source = fs.readFileSync(__dirname + "/package.json").toString("utf-8");
  const sourceObj = JSON.parse(source);
  sourceObj.scripts = {};
  sourceObj.devDependencies = {};

  fs.writeFileSync(
    __dirname + "/public/package.json",
    Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8"),
  );
  fs.copyFileSync(__dirname + "/CHANGELOG.md", __dirname + "/public/CHANGELOG.md");

  // if (sourceObj.main && sourceObj.main.startsWith("/public/")) {
  //   sourceObj.main = sourceObj.main.slice(5);
  // }
  // fs.writeFileSync(
  //   __dirname + "/public/version.txt",
  //   Buffer.from(sourceObj.version, "utf-8"),
  // );
  // fs.copyFileSync(__dirname + "/.npmignore", __dirname + "/public/.npmignore");
})();
