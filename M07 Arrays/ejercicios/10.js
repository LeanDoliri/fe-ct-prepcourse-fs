function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  return array.reduce((maxIndex, currentElement, currentIndex, arr) => {
    return currentElement > arr[maxIndex] ? currentIndex : maxIndex;
  }, 0);
}

module.exports = encontrarIndiceMayor;
