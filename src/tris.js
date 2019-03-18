/**
 * Funzioni di logica del gioco Tris
 */

 // torna il nome del vincitore se c'è, oppure undefined
function compara3 (status, i1, i2, i3) {
  if (status[i1] === 'EMPTY') return undefined
  if (
    status[i1] === status[i2]
    && status[i2] === status[i3]
  ) return status[i1]
}

/**
 * Torna un valore 'CIRCLE' o 'CROSS' o undefined
 * @param {string[]} status
 */
function isGameOver (status) {
  const vincitore = [
    // controllo se la vittoria è sulle righe
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // controllo se la vittoria è sulle colonne
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // controllo se la vittoria è sulle diagonali
    [0, 5, 8],
    [2, 5, 6],
  ].reduce((vincitore, val) => {
    if (vincitore != null) return vincitore
    return compara3(status, val[0], val[1], val[2])
  }, undefined)

  /**
   * #1 chiamata
   * vincitore = undefined, val = [0, 1, 2]
   * (vincitore != null) => FALSE
   * return compara3([], 0, 1 ,2)
   *
   * #2 chiamata
   * vincitore = 'CERCHIO' val = [3, 4, 5]
   * (vincitore != null) => TRUE
   * return 'CERCHIO'
   *
   * #3 chiamata
   * vincitore = 'CERCHIO' val = [6, 7, 8]
   * (vincitore != null) => TRUE
   * return 'CERCHIO'
   */

  return vincitore
}

export { isGameOver }
