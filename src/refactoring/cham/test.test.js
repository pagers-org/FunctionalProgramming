// testUtils.js
const path = require('path');
const fs = require('fs');
const execSync = require('child_process').execSync;

const consoleTestUtils = (script, inputDir = './', outputDir = './') => {
  return {
    execSyncArgsForCreateTxtFormConsoleLog: () => {
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
      }
      return `node ${path.join(inputDir, script)} > ${path.join(outputDir, script.replace('.js', ''))}.txt`;
    },
    readOutputTxtArgs: [path.join(outputDir, `${script.replace('.js', '')}.txt`), 'utf-8'],
  };
};

describe('tests', () => {
  const beforeData = {
    inputDir: 'src/refactoring',
    scripts: '수정전-03_부적절한_평가.js',
    outputDir: 'src/refactoring/cham/outputTxt',
  };
  const afterData = {
    inputDir: 'src/refactoring/cham',
    scripts: '수정후-03_부적절한_평가.js',
    outputDir: 'src/refactoring/cham/outputTxt',
  };

  const before1 = consoleTestUtils(beforeData.scripts, beforeData.inputDir, beforeData.outputDir);
  const after1 = consoleTestUtils(afterData.scripts, afterData.inputDir, afterData.outputDir);

  beforeAll(() => {
    execSync(before1.execSyncArgsForCreateTxtFormConsoleLog());
    execSync(after1.execSyncArgsForCreateTxtFormConsoleLog());
  });

  test('03_부적절한_평가', () => {
    const beforeTxt = fs.readFileSync(...before1.readOutputTxtArgs);
    const afterTxt = fs.readFileSync(...after1.readOutputTxtArgs);
    expect(beforeTxt).toEqual(afterTxt);
  });
});