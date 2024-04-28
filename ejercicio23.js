/* Ejercicio 23

Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola. */

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 99 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
const small_movie = []
const median_movie = []
const big_movie = []
for (const iterator of movies) {
  if (iterator.durationInMinutes < 100) {
    small_movie.push(iterator)
  } else if (
    iterator.durationInMinutes > 100 &&
    iterator.durationInMinutes < 200
  ) {
    median_movie.push(iterator)
  } else {
    big_movie.push(iterator)
  }
}
console.log(small_movie)
console.log(median_movie)
console.log(big_movie)
