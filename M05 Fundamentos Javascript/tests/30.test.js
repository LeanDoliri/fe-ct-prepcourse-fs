// const areaDelTriangulo = require('../ejercicios/30');

// test('Debe retornar el área correcta del triángulo', function () {
//   expect(areaDelTriangulo(10, 5)).toBe(25);
//   expect(areaDelTriangulo(20, 10)).toBe(100);
//   expect(areaDelTriangulo(0, 10)).toBe(0);
// });

const retornarPerimetro = require("../ejercicios/30");

test("Debe retornar el perímetro correcto de un cuadrado", function () {
  expect(retornarPerimetro(1)).toBe(4);
  expect(retornarPerimetro(20)).toBe(80);
  expect(retornarPerimetro(0)).toBe(0);
});
