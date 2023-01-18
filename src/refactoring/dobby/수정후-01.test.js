const execSync = require("child_process").execSync;
const fs = require("fs");
const { consoleTestUtils } = require("./testUtil");

const beforeData = {
  inputDir: "src/refactoring",
  scripts: "수정전-01_조건부_복잡성.js",
  outputDir: "src/refactoring/dobby/outputTxt",
};
const afterData = {
  inputDir: "src/refactoring/dobby",
  scripts: "수정후-01_조건부_복잡성.js",
  outputDir: "src/refactoring/dobby/outputTxt",
};

const before1 = consoleTestUtils(
  beforeData.scripts,
  beforeData.inputDir,
  beforeData.outputDir
);

const after1 = consoleTestUtils(
  afterData.scripts,
  afterData.inputDir,
  afterData.outputDir
);

describe("tests", () => {
  beforeAll(() => {
    execSync(before1.execSyncArgsForCreateTxtFormConsoleLog());
    execSync(after1.execSyncArgsForCreateTxtFormConsoleLog());
  });

  test("01_조건부_복잡성", () => {
    const beforeTxt = fs.readFileSync(...before1.readOutputTxtArgs);
    const afterTxt = fs.readFileSync(...after1.readOutputTxtArgs);
    expect(beforeTxt).toEqual(afterTxt);
  });
});
