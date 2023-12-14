function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  let result;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string" && array[i].length > 4) {
      result = array[i];
      return result;
    }
  }

  return undefined;
}

module.exports = obtenerPrimerStringLargo;
