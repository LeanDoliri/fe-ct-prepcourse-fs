// const numeroRandom = require('../ejercicios/38');

// test('Debe devolver un número entre 0 y 1', function () {
//   expect(typeof numeroRandom()).toBe('number');
//   expect(numeroRandom()).toBeGreaterThanOrEqual(0);
//   expect(numeroRandom()).toBeLessThan(1);
// });

// test('Debe devolver un número random', function () {
//   expect(numeroRandom()).not.toBe(numeroRandom());
// });

const redondearHaciaArriba = require("../ejercicios/38");

test("Debe devolver el número redondeado hacia arriba", function () {
  expect(redondearHaciaArriba(1.5)).toBe(2);
  expect(redondearHaciaArriba(2)).toBe(2);
  expect(redondearHaciaArriba(0.1)).toBe(1);
});
