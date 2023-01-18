// by siny...thanks,,

const path = require("path");
const fs = require("fs");

const consoleTestUtils = (script, inputDir = "./", outputDir = "./") => {
  return {
    execSyncArgsForCreateTxtFormConsoleLog: () => {
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
      }
      return `node ${path.join(inputDir, script)} > ${path.join(
        outputDir,
        script.replace(".js", "")
      )}.txt`;
    },
    readOutputTxtArgs: [
      path.join(outputDir, `${script.replace(".js", "")}.txt`),
      "utf-8",
    ],
  };
};

module.exports = {
  consoleTestUtils,
};
