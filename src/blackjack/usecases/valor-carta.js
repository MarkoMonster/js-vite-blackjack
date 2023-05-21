/**
 * Obtener el valor númerico de la carta
 * @param {String} carta Recibe el String que se sustrae de la fn pedirCarta()
 * @returns {Number} Retorna el valor de carta en String y lo múltiplica * 1 para convertirlo en número
 */
export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}