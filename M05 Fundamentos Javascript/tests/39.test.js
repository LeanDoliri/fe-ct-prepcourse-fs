// const redondearNumero = require('../ejercicios/39');

// test('Debe devolver el número redondeado', function () {
//   expect(redondearNumero(1.5)).toBe(2);
//   expect(redondearNumero(2)).toBe(2);
//   expect(redondearNumero(0.1)).toBe(0);
// });

const numeroRandom = require('../ejercicios/39');

test('Debe devolver un número entre 0 y 1', function () {
  expect(typeof numeroRandom()).toBe('number');
  expect(numeroRandom()).toBeGreaterThanOrEqual(0);
  expect(numeroRandom()).toBeLessThan(1);
});

test('Debe devolver un número random', function () {
  expect(numeroRandom()).not.toBe(numeroRandom());
});
