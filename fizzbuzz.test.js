const fizzbuzz = require('./fizzbuzz')

test('Returns fizz', () => {
  expect(fizzbuzz(3)).toEqual('fizz');
});

test('Returns buzz', () => {
  expect(fizzbuzz(5)).toEqual('buzz');
});

test('Returns fizzbuzz', () => {
  expect(fizzbuzz(15)).toEqual('fizzbuzz');
});

test('Returns fizz', () => {
  expect(fizzbuzz(9)).toEqual('fizz');
});

test('Returns buzz', () => {
  expect(fizzbuzz(10)).toEqual('buzz');
});
