const dfuid = require('../lib/index');

const hasDuplicates = (array) => {
  return (new Set(array)).size !== array.length;
}

describe('DFUID', () => {
  test('Returns a value', () => {
    const result = dfuid();
    expect(result).toBeDefined();
  });

  test('No duplicate values in 1,000,000 results', () => {
    const results = [];
    for (var i = 0; i < 1000000; ++i) {
      results.push(dfuid());
    }
    expect(hasDuplicates(results)).toBe(false);
  });
})
