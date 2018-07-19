const fizzbuzz = require('./fizzbuzz')

test('Returns fizz', () => {
  expect(fizzbuzz(3)).toEqual('fizz');
});
