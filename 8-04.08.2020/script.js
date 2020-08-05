/* 1.Zadatak
Napisati funkciju suma koja vraća sumu kubova brojeva od n do m.
Pozvati funkciju i njen rezultat ispisati u konzoli. */
console.log("1. Zadatak");

function sumiraj (n, m) {

    let suma = 0;

    for (i = n; i <= m; i++) {
        
        suma += i ** 3;
    }
    return suma;
}

console.log(`Suma kubova je: ${sumiraj(3,4)}`);



/*2.Zadatak
Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba. 
Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. 
Pozvati funkciju i dobijeni rezultat ispisati u konzoli.
 */
console.log("2. Zadatak");

let godina = godRodjenja => {

    let time = new Date();
    let trenutnaGodina = time.getFullYear();
    if (godRodjenja < trenutnaGodina) {
    return trenutnaGodina - godRodjenja;
    }
    else {
        return "0";
    }
}

console.log(`Osoba ima ${godina(1994)} godina.`);



/*3.Zadatak
Napisati funkciju `deljiv` kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju. */
console.log("3. Zadatak");

let deljiv = (n, m ,k) => {
    let brojac = 0;
    for (i = n; i <= m; i++){
        if (i % k == 0){
            brojac++;
        }
    }
    return brojac
}

n = 2; m = 20; k = 2;

console.log(`Od broja ${n} do broja ${m} ima ${deljiv(n,m,k)} brojeva deljivih sa ${k}.`);