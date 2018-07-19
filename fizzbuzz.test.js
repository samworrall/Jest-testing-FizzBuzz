const fizzbuzz = require('./fizzbuzz')

test('Returns fizz', () => {
  expect(fizzbuzz(3)).toEqual('fizz');
});

test('Returns buzz', () => {
  expect(fizzbuzz(5)).toEqual('buzz');
});
