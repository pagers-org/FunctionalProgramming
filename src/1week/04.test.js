const { convertToConditionalUpperCase } = require('./04.js');

describe('convertToConditionalUpperCase', () => {
  it('case: 1', () => {
    const words = ['piece', 'functional', 'of', 'sentence', 'cake', 'perspective'];
    expect(convertToConditionalUpperCase(words)).toEqual([
      'piece',
      'FUNCTIONAL',
      'of',
      'SENTENCE',
      'cake',
      'PERSPECTIVE',
    ]);
  });

  it('case: 2', () => {
    const words = ['PIECE', 'FUNCTIONAL', 'OF', 'SENTENCE', 'CAKE', 'PERSPECTIVE'];
    expect(convertToConditionalUpperCase(words)).toEqual([
      'piece',
      'FUNCTIONAL',
      'of',
      'SENTENCE',
      'cake',
      'PERSPECTIVE',
    ]);
  });
});
