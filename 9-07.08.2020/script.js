let niz = [1, 3, -10, 22, -4, 5, 17]; // Niz za sva tri zadatka

console.log("1. Zadatak");
/* Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća indeks minimalnog elementa ovog niza. Ukoliko ima više jednakih minimalnih elemenata, vratiti indeks bilo kog od minimalnih elemenata. */

console.log(`Niz = ${niz}`);

let minInd = niz => {
    let mini = niz[0];
    let miniInd = 0;
    for (let i = 0; i < niz.length; i++) {
        if (mini > niz[i]) {
            mini = niz[i];
            miniInd = i;
        }
    }
    return miniInd;
}

console.log(`Indeks minimalnog elementa niza je: ${minInd(niz)}`)


console.log("2. Zadatak");
/* Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom. */

console.log(`Niz = ${niz}`);

let sumaElemenataSaParnimIndeksom = niz => {
    let suma = 0;
    for (let i = 0; i <= niz.length; i++) {
        if (i % 2 == 0){
            suma += niz[i];
        }
    }
    return suma;
};

console.log(`Suma elemenata niza sa parnim indexom je: ${sumaElemenataSaParnimIndeksom(niz)}`);


console.log("3. Zadatak");
/* Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona menja znak svakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli. */

console.log(`Niz = ${niz}`);

let znakParniIndex = niz => {
    for (let i = 0; i < niz.length; i++){
        if(niz[i] % 2 != 0 && i % 2 == 0){
        niz[i] *= (-1);
        }
    }
    return niz;
};

console.log(`Promena svakog neparnog elementa sa parnim indeksom: ${znakParniIndex(niz)}`);
