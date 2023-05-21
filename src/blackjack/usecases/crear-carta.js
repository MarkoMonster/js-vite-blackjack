/**
 * 
 * @param {Stirng} carta recibe un argumento string  para concatenar con la extensión.png
 * @returns {HTMLImageElement} imagen de retono
 */
export const crearCarta = ( carta ) => {
    if( !carta ) throw new Error('La Carta es un argumento olbigatorio');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta
}