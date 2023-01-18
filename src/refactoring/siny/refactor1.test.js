const execSync = require('child_process').execSync;
const fs = require('fs');
const { consoleTestUtils } = require('./testUtils.js');

const { Client, Product, Order, Summary } = require('./수정후-03_부적절한_평가');
const beforeData = {
  inputDir: 'src/refactoring',
  scripts: '수정전-01_조건부_복잡성.js',
  outputDir: 'src/refactoring/siny/outputTxt',
};
const afterData = {
  inputDir: 'src/refactoring/siny',
  scripts: '수정후-01_조건부_복잡성.js',
  outputDir: 'src/refactoring/siny/outputTxt',
};

const before1 = consoleTestUtils(beforeData.scripts, beforeData.inputDir, beforeData.outputDir);

const after1 = consoleTestUtils(afterData.scripts, afterData.inputDir, afterData.outputDir);

describe('tests', () => {
  beforeAll(() => {
    execSync(before1.execSyncArgsForCreateTxtFormConsoleLog());
    execSync(after1.execSyncArgsForCreateTxtFormConsoleLog());
  });

  test('01_조건부_복잡성', () => {
    const beforeTxt = fs.readFileSync(...before1.readOutputTxtArgs);
    const afterTxt = fs.readFileSync(...after1.readOutputTxtArgs);
    expect(beforeTxt).toEqual(afterTxt);
  });
  // 무엇을 원하는지 모르겠습니다...ㅠㅠ
  // test('02_기능_특정하기', () => {
  //   const beforeTxt = fs.readFileSync(...before2.readOutputTxtArgs);
  //   const afterTxt = fs.readFileSync(...after2.readOutputTxtArgs);
  //   expect(beforeTxt).toEqual(afterTxt);
  // });

  test('03_부적절한_평가', () => {
    const client1 = new Client({
      name: 'siny',
      type: 'premium',
      location: 'USA',
    });
    const product1 = new Product({
      value: 100,
      name: 'shirts',
      shipping: 5,
    });
    const order1 = new Order({
      id: '1',
      value: '???',
      product: product1,
      client: client1,
    });

    const summary = new Summary({ order: order1 });

    expect(summary.printSummary()).toEqual(`Order: 1
                Client: siny
                Product: shirts
                TotalAmount: 94
                Arrival in: 5 days.`);
  });
});
