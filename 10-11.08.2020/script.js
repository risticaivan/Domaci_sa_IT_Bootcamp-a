
// Cene sam ja stelovao da bi vama lakse bilo da testirate, prave cene su u komentarima pored ubacenih cena.
// Isto nesto sam editovao u JS a ostalo da ne bih guzvao kod stavio sam u style u html-u
// tekst koji je treba da bude siv stavio sam da bude crn da bi se bolje video :)
// svaki link vodi do Lagunine stranice odakle sam uzimao slike i ostale podatke.

let knjiga1 = {
    naziv: "Savin osvetnik",
    autor: "Vanja Bulić",
    cena: 1099, //prava cena 899.00 din
    slika: "slike/savin.jpg",
    link: `<a href="https://www.laguna.rs/n4749_savin_osvetnik_laguna.html" target="_blank">Link do knjige</a>`
};

let knjiga2 = {
    naziv: "Cevenać",
    autor: "Ju Nesbe",
    cena: 1099, //prava cena 1099.00 din
    slika: "slike/crvendac.jpg",
    link: `<a href="https://www.laguna.rs/n995_knjiga_crvendac_laguna.html" target="_blank">Link do knjige</a>`
};

let knjiga3 = {
    naziv: "Ubistvo u Orijent ekspresu",
    autor: "Agata Kristi",
    cena: 499, //prava cena 799.00 din
    slika: "slike/ubistvo.jpg",
    link: `<a href="https://www.laguna.rs/n3608_knjiga_ubistvo_u_orijent_ekspresu_laguna.html" target="_blank">Link do knjige</a>`
};

let knjiga4 = {
    naziv: "Profesori smrti 2",
    autor: "Dejan Lučić",
    cena: 499, //prava cena nema, Datum objavljivanja: avgust 2020.
    slika: "slike/profesor_smrti.jpg",
    link: `<a href="https://www.laguna.rs/n4837_knjiga_profesori_smrti_2_laguna.html" target="_blank">Link do knjige</a>`
};

let knjiga5 = {
    naziv: "Teodorin prsten",
    autor: "Vanja Bulić",
    cena: 499, //prava cena 1199.00 din
    slika: "slike/teodorin_prsten.jpg",
    link: `<a href="https://www.laguna.rs/n4676_knjiga_teodorin_prsten_posebno_izdanje_laguna.html" target="_blank">Link do knjige</a>`
};

let knjiga6 = {
    naziv: "Druga planina",
    autor: "Dejvid Bruks",
    cena: 499, //prava cena 1199.00 din
    slika: "slike/druga_planina-dejvid_bruks_v.jpg",
    link: `<a href="https://www.laguna.rs/n4762_knjiga_druga_planina_laguna.html" target="_blank">Link do knjige</a>`
};


let knjiga7 = {
    naziv: "Umetnost pobune – The Rolling Stones",
    autor: "Ivan Ivačković",
    cena: 799, //prava cena 1199.00 din
    slika: "slike/umetnost_pobune_the_rolling_stones-ivan_ivackovic_v.jpg",
    link: `<a href="https://www.laguna.rs/n4824_knjiga_umetnost_pobune_the_rolling_stones_laguna.html" target="_blank">Link do knjige</a>`
};


let knjiga8 = {
    naziv: "Serviraj za pobedu",
    autor: "Novak Đoković",
    cena: 1099, //prava cena 399.00 din
    slika: "slike/serviraj_za_pobedu_v.jpg",
    link: `<a href="https://www.laguna.rs/n2245_knjiga_serviraj_za_pobedu_laguna.html" target="_blank">Link do knjige</a>`
};


let knjiga9 = {
    naziv: "Hajka",
    autor: "Lusi Foli",
    cena: 1099, //prava cena 999.00 din
    slika: "slike/hajka-lusi_foli_v.jpg",
    link: `<a href="https://www.laguna.rs/n4613_knjiga_hajka_laguna.html" target="_blank">Link do knjige</a>`
};

let knjiga10 = {
    naziv: "21 lekcija za 21. vek",
    autor: "Juval Noa Harari",
    cena: 1099, //prava cena 1199.00 din
    slika: "slike/21_lekcija_za_21_vek-juval_noa_harari_v.jpg",
    link: `<a href="https://www.laguna.rs/n4179_knjiga_21_lekcija_za_21_vek_laguna.html" target="_blank">Link do knjige</a>`
};


// niz knjiga
let knjige = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5, knjiga6, knjiga7, knjiga8, knjiga9, knjiga10];

// Funkcije koje se ispisuju u konzoli
// prosecna cena knjige
let prosecnaCena = niz => {
    let suma = 0;
    let br = 0;

    niz.forEach( ele => {
        suma += ele.cena;
        br++;
    });
    return suma/br;
}
console.log(`Prosecna cena svih knjiga je: ${prosecnaCena(knjige)}`);

// minimalna cena knjige
let minCena = niz => {
    let cena = niz[0].cena;
    for (let i = 0; i < niz.length; i++){
        if (niz[i].cena < cena) {
            cena = niz[i].cena;
        };
    };
    return cena;
}
console.log(`Minimalna cena nekih knjiga je: ${minCena(knjige)}`);

//broj sa minimalnom cenom knjige
let brojSaMinCenom = niz => {
    let mini = minCena(niz);
    br = 0;
    niz.forEach( ele => {
        if (ele.cena == mini){
            br++;
        };
    });
    return br;
}
console.log(`Broj knjiga sa minimalnom cenom: ${brojSaMinCenom(knjige)}`);

//max cena knjige
let maxCena = niz => {
    let max = niz[0].cena;
    for (let i = 0; i < niz.length; i++){
        if(niz[i].cena > max){
            max = niz[i].cena;
        }
    };
    return max;
}
console.log(`Maksimalna cena nekih knjiga je: ${maxCena(knjige)}`);

// br knjiga sa max cenom
let brojSaMaxCenom = niz => {
    let max = maxCena(niz);
    let br = 0;
    niz.forEach( ele => {
        if ( ele.cena == max){
            br++;
        }
    });
    return br;
}
console.log(`Broj knjiga sa najvecom cenom je: ${brojSaMaxCenom(knjige)}`);

//zbir cena svih knjiga
let zbirSvihCena = niz => {
    let suma = 0;
    niz.forEach( ele => {
        suma += ele.cena;
    });
    return suma;
}
console.log(`Zbir svih cena knjiga je: ${zbirSvihCena(knjige)}`);


// Ispisivanje Tabele i svih elemenata na stranicu (malo sam ih cackao i dodavao stilove)
let div = document.getElementById("div");
let prosek = prosecnaCena(knjige);
let tabela = `<table style= "text-align: center; margin-left: 50px; ">` 
knjige.forEach ( ele => {
    tabela += '<tr><td><img style="border-radius: 5px; box-shadow: 5px 5px 10px black;" src="';
    tabela += ele.slika;
    tabela += '"/></td>';
    let elementi = (`${ele.naziv} <br> ${ele.autor} <br> Cena: ${ele.cena} din. <br><br> ${ele.link}`);

    if (ele.cena < prosek) {
        tabela += "<td><p style='color:blue; padding: 0px 15px;'>" + elementi + "</p></td></tr>";
    } else {
        tabela += "<td><p style='color:black; padding: 0px 15px;'>" + elementi + "</p></td></tr>";
        // ovde sam stavio black umesto grey da bi se bolje video text na stranici 
    }
});

let ukupno = `<tr id='ukupno'><td style="border-radius: 25px">UKUPNO:</td><td style="border-radius: 25px">${zbirSvihCena(knjige)} din.</td></tr>`;

tabela += ukupno;
tabela += `</table>`;
div.innerHTML += tabela;

// znam da je trebalo da se stavi color = purple i blue, ali sam probao ovako jer mislim da je preglednije, posazina samo menja boje a text ostaje beo jer se tako vise vidi promena :) 
let ukupno2 = document.getElementById(`ukupno`);
if (brojSaMaxCenom(knjige) > brojSaMinCenom(knjige)) {
    ukupno2.style.background = "#4F2ABC"; // purple (ljubicasto)
    ukupno2.style.color = "white";
    ukupno2.style.textAlign = "center";
    ukupno2.style.textShadow = "0 0 3px white";  
} else {
    ukupno2.style.background = "#3A49FF"; // blue (plavo)
    ukupno2.style.color = "white";
    ukupno2.style.textAlign = "center";
    ukupno2.style.textShadow = "0 0 3px white";
}









/* Formirati niz objekata knjiga, pri čemu svaki objekat sadrži:
Naziv knige,
Autora knjige,
Cena knjige,
Putanja do sličice.
Formirati tabelu koja ima dve kolone, dok je broj redova za jedan veći od veličine niza knjiga.
U svim redovima osim u poslednjem redu treba da stoje informacije o svakoj knjizi iz niza. U prvoj koloni je potrebno staviti sličicu knjige, a u drugoj koloni u paragrafu naziv knjige, autora i cenu knige.
Ukoliko je cena knjige ispod proseka cene svih knjiga, boja teksta u redu u kojem se nalazi knjiga treba da bude plava, a u suprotnom, boja teksta treba da bude siva.
U poslednjem redu, u prvoj koloni treba da stoji tekst “UKUPNO”, a u drugoj koloni zbir cena svih knjiga.
Ukoliko je broj knjiga koji imaju maksimalnu cenu strogo veći od broja knjiga koji imaju minimalnu cenu, tada tekst u poslednjem redu obojiti ljubičastom bojom. U suprotnom, obojiti ga plavom bojom. */