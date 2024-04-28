/* Ejercicio 22

Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante. */

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

for (let index = 0; index < fruits.length; index++) {
  for (const iterator of foodSchedule) {
    if (!iterator.isVegan) {
      iterator.isVegan = true
      iterator.name = fruits[index]
      index++
    }
  }
}
console.log(foodSchedule)
