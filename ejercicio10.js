/* Ejercicio 10

Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función: */

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let media = 0
  for (let index = 0; index < param.length; index++) {
    const element = param[index]
    media += element
  }
  console.log(`El promedio es: ${media / param.length}`)
}
average(numbers)
