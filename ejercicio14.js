/* Ejercicio 14

Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función: */

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param, repeat) {
  let sum = []
  for (let i = 0; i < param.length; i++) {
    if (param[i] === repeat) {
      sum.push(param[i])
    }
  }
  //podríamos agregar el length para saber directamente las veces que se repite una palabra.
  console.log(
    `La palabra ${repeat} se repite ${sum.length} ${
      sum.length > 1 ? 'veces' : 'vez'
    }`
  )
}
repeatCounter(counterWords, 'code')
