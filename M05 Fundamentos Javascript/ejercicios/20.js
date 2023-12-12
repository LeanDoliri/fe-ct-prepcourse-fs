function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if (letra.length === 1) {
    switch (letra) {
      case "a":
        return "Es vocal";
        break;
      case "e":
        return "Es vocal";
        break;
      case "i":
        return "Es vocal";
        break;
      case "o":
        return "Es vocal";
        break;
      case "u":
        return "Es vocal";
        break;
      default:
        return "Dato incorrecto";
    }
  }
  return "Dato incorrecto";
}

module.exports = esVocal;
