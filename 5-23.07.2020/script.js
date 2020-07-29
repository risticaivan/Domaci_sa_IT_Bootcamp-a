//1. Zadatak
console.log("1. Zadatak");

// Ferenhajti u Kelvine
let F = 200; // Farenhajt
let FtoC = (F - 32) * 5/9; // Farenhajt to Celzijus
console.log(`${F} Farenhajta je ${FtoC + 273.15} Kelvina`);

// Kelvina u Ferenhajte
let K = 500; // Kelvina
let KtoC = K - 273.15; // Kelvin to Celzijus
console.log(`${K} Kelvina je ${(KtoC * 9/5) + 32} Ferenhajta`);



//Drugi zadatak
console.log("2. Zadatak");

let p = 30; // poglavlja
let dan1 = 8; // prvi dan
let dan2 = dan1 + 2; // drugi dan
console.log(`Preostalo je ${p - (dan1 + dan2)} poglavlja.`);



//3. Zadatak
console.log("3. Zadatak");

let pera = 1500; // Koliko je Pera dao novca
let mika = 1500; // Koliko je mika dao novca
let kusur = 500; // Kusur koji su dobili
let cena = ((pera + mika) - kusur) / 2; // Cena jednog dzempera
console.log(`Pera treba da dobije ${pera - cena} dinara, a mika treba da dobije ${mika - cena} dinara`);

