const sumarHastaNConBreak = require('../ejercicios/20.js');

test('sumarHastaNConBreak of 5 should return 15', () => {
  expect(sumarHastaNConBreak(5)).toBe(15);
});

test('sumarHastaNConBreak of 10 should return 55', () => {
  expect(sumarHastaNConBreak(10)).toBe(55);
});

test('sumarHastaNConBreak of 20 should return 105', () => {
  expect(sumarHastaNConBreak(20)).toBe(105);
});