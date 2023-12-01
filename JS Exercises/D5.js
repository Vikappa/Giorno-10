/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log("ESERCIZIO 1")
for (let iESERCIZIO1 = 0; iESERCIZIO1 < pets.length; iESERCIZIO1++) {
  console.log(pets[iESERCIZIO1])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("ESERCIZIO 2")

const orderedPets = pets.slice();

orderedPets.sort()

for (let iESERCIZIO2 = 0; iESERCIZIO2 < orderedPets.length; iESERCIZIO2++) {
  console.log(orderedPets[iESERCIZIO2])
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("ESERCIZIO 3")
for (let iESERCIZIO3 = pets.length - 1; iESERCIZIO3 >= 0; iESERCIZIO3--) {
  console.log(pets[iESERCIZIO3])
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("ESERCIZIO 4")
let temp = ""
temp = pets[0]
pets[0] = pets[pets.length - 1]
pets[pets.length - 1] = temp
console.log(pets)


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("ESERCIZIO 5")

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function inventaTarga() {
  let primaLettera = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  let secondaLettera = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  let terzaLettera = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  let quartaLettera = alphabet.charAt(Math.floor(Math.random() * alphabet.length))

  return primaLettera + secondaLettera + (Math.floor(Math.random() * 10)) + (Math.floor(Math.random() * 10)) + (Math.floor(Math.random() * 10)) + terzaLettera + quartaLettera
}


for (let iESERCIZIO5 = 0; iESERCIZIO5 < cars.length; iESERCIZIO5++) {

  cars[iESERCIZIO5].plate = inventaTarga()
  console.log(cars[iESERCIZIO5])
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("ESERCIZIO 6")
cars.push({
  brand: 'Lancia',
  model: 'Musa',
  color: 'silvergray',
  trims: ['cheap', 'cheapier'],
  plate: inventaTarga()
})

for (let iESERCIZIO6 = 0; iESERCIZIO6 < cars.length; iESERCIZIO6++) {
  cars[iESERCIZIO6].trims.pop()
}

console.log(cars)


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("ESERCIZIO 7")

const justTrims = []
let nTrims = 0
for (let iESERCIZIO7 = 0; iESERCIZIO7 < cars.length; iESERCIZIO7++) {
  justTrims[nTrims] = cars[iESERCIZIO7].trims[0]
  nTrims++
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("ESERCIZIO 8")

for (let iESERCIZIO8 = 0; iESERCIZIO8 < cars.length; iESERCIZIO8++) {
  if (cars[iESERCIZIO8].color.charAt(0) === "b") {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }

}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log("ESERCIZIO 9")

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let scope = 0
let iESERCIZIO9 = 0
while (scope !== 32) {
  scope = numericArray[iESERCIZIO9]
  console.log(scope)// Lascio per verifica anche la consegna non chiede di stampare
  iESERCIZIO9++
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log("ESERCIZIO 10")

const charactersArray = ['g', 'n', 'u', 'z', 'd']
const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
const numberArray = [];

function charToNumber(charToCount) {
  let index = 1
  for (let i = 0; i < alphabetLowerCase.length; i++) {
    if (alphabetLowerCase.charAt(index) === charToCount.charAt(0)) {
      return index
    }
    index++
  }
  return -1
}

for (let iESERCIZIO10 = 0; iESERCIZIO10 < charactersArray.length; iESERCIZIO10++) {
  numberArray[iESERCIZIO10] = charToNumber(charactersArray[iESERCIZIO10])
}

console.log(numberArray)





