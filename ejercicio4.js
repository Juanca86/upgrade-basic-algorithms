
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);
//1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers.splice (0,1,'IRONMAN')
console.log(avengers)

//1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log('hay ' +avengers.length +  ' elementos hay en el array');

//1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push ('Morty', 'Summer')
console.log(rickAndMortyCharacters)
//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
//const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.push('Lapiz Lopez')
rickAndMortyCharacters.pop()
let first = rickAndMortyCharacters.slice(0, 1)
let last = rickAndMortyCharacters.slice(4) 
console.log( first, last);

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
//const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1)
console.log(rickAndMortyCharacters);