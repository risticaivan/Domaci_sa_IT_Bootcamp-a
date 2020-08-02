console.log("1. Zadatak");
/* Odrediti ceo deo i ostatak pri deljenju celih brojeva a i b, bez korišćenja operacija / i %. */
document.getElementById("z1").innerHTML = `<p>1. Zadatak</p>`;

let a = 11;   // deljenik
let b = 2;     // delilac
let c = 0; // kolicnik
let o = a; // ostatak
while(o - b >= 0) {
    c++;
    o -= b;
}

console.log(`${a} / ${b} = ${c} i ostatak ${o}`);
document.getElementById("z11").innerHTML = `${a} / ${b} = ${c} i ostatak ${o}`;



console.log("2. Zadatak");
/* Za dat prirodan broj n i realne brojeve α, β iz intervala [-1, 1], odrediti sumu elemenata oblika
sin⁡(n + i/n),  i = 1, 2, …, n, čija vrednost pripada intervalu [α, β]. */
document.getElementById("z2").innerHTML = `<p>2. Zadatak</p>`;

let n = 5;
let alfa = - 1;
let beta = 1;
let suma = 0;
let i = 1;
let element;
while (i<=n) {
    element = Math.sin(n+i/n);
    if ((element>alfa) && (element<beta)) {
        suma+=element;
    }
    i++;
}

console.log(`Tražena suma je ${suma}.`);
document.getElementById("z22").innerHTML = `Tražena suma je ${suma}`;



console.log("3. Zadatak");
/* Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira. */
document.getElementById("z3").innerHTML = `<p>3. Zadatak</p>`

i = 0;
n = 5;
let divSlika = document.getElementById("zadatak3");

while (i < n) {
    if (i % 2 == 0) {
        divSlika.innerHTML += `<img src="slike/js.jpeg" style="border:3px solid black; height: 50px;"> <br>`;
    }
    else {
        divSlika.innerHTML += `<img src="slike/js.jpeg" style="border:3px solid red; height: 50px;"> <br>`;
    }
    i++
}

console.log(`Broj slika = ${i}`)