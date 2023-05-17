// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */

// TODO: que es una closure? una closure es una funcion contenedora de una funion hija, a la cual se le hereda el lexical del padre para que pueda seguir en funcionanmiento

function counter() {
  let valor = 0;
  return function hijaCounter() {
    // debe actuar como contador
    return valor++;
  };
}

const contador = counter();
contador();
contador();
contador();
console.log(contador());
const contadorDos = counter();
contadorDos();
contadorDos();
console.log(contadorDos);
