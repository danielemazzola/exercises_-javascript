/* Ejercicio 8
Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(avenger) {
  let longest_word = ''
  for (let i = 0; i < avenger.length; i++) {
    const word = avenger[i]
    console.log(`${word} tiene ${word.length} caracteres`)
    if (word.length > longest_word.length) {
      longest_word = word
    }
  }
  console.log(
    `La palabra con más caracteres es ${longest_word} con ${longest_word.length} caracteres y la primera mencionada.`
  )
}
findLongestWord(avengers)
