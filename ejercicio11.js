/* Ejercicio 11

Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: pista (typeof)
*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let sumNumber = 0
  let sumCharacter = 0
  for (let index = 0; index < param.length; index++) {
    const element = param[index]
    if (typeof element === 'number') {
      sumNumber += element
    } else {
      sumCharacter += element.length
    }
  }
  console.log(`La suma de los valores 'NUMBERS' es: ${sumNumber}`)
  console.log(`La suma de los valores 'STRING' es: ${sumCharacter}`)
}
averageWord(mixedElements)
