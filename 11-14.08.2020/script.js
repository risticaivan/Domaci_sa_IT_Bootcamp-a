// Nisam stigo sve da zavrsim sto sam hteo, potrudicu se da do kraja nedelje to ubacim na gitu.
// izvijnavam se sto je kod neuredan, nisam imao vremena ni to da sredim i lepo obelezim.

let film01 = {
    naziv: "The Shawshank Redemption",
    reziser: "Frank Darabont",
    vremeUMin: 142, // 2h 22min
    slika: "images/TheShawshankRedemption.jpg",
    imbdOcena: "9.3",
    link: `https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=ea4e08e1-c8a3-47b5-ac3a-75026647c16e&pf_rd_r=J771KEFSWFEG9DDHAEGR&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=moviemeter&ref_=chtmvm_tt_45`
};
let film02 = {
    naziv: "The Godfather",
    reziser: "Francis Ford Coppola", // Francis Ford Coppola
    vremeUMin: 175, // 2h 55min
    slika: "images/TheGodfather.jpg",
    imbdOcena: "9.2",
    link: `https://www.imdb.com/title/tt0068646/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=ea4e08e1-c8a3-47b5-ac3a-75026647c16e&pf_rd_r=J771KEFSWFEG9DDHAEGR&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=moviemeter&ref_=chtmvm_tt_48`
};
let film03 = {
    naziv: "The Dark Knight", 
    reziser: "Christopher Nolan", // Christopher Nolan
    vremeUMin: 152, //  2h 32min 
    slika: "images/TheDarkKnight.jpg",
    imbdOcena: "9.0",
    link: `https://www.imdb.com/title/tt0468569/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=ea4e08e1-c8a3-47b5-ac3a-75026647c16e&pf_rd_r=J771KEFSWFEG9DDHAEGR&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=moviemeter&ref_=chtmvm_tt_69`
};
let film04 = {
    naziv: "Dil Bechara",
    reziser: "Mukesh Chhabra",
    vremeUMin: 101, //  1h 41min
    slika: "images/DilBechara.jpg",
    imbdOcena: "8.9",
    link: `https://www.imdb.com/title/tt8110330/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=ea4e08e1-c8a3-47b5-ac3a-75026647c16e&pf_rd_r=J771KEFSWFEG9DDHAEGR&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=moviemeter&ref_=chtmvm_tt_4`
};
let film05 = {
    naziv: "Pulp Fiction",
    reziser: "Quentin Tarantino",
    vremeUMin: 154, //  2h 34min 
    slika: "images/PulpFiction.jpg",
    imbdOcena: "8.9",
    link: `https://www.imdb.com/title/tt0110912/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=ea4e08e1-c8a3-47b5-ac3a-75026647c16e&pf_rd_r=J771KEFSWFEG9DDHAEGR&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=moviemeter&ref_=chtmvm_tt_100`
};
let film06 = {
    naziv: "Hamilton",
    reziser: "Thomas Kail",
    vremeUMin: 160, //  2h 40min
    slika: "images/Hamilton.jpg",
    imbdOcena: "8.8",
    link: `https://www.imdb.com/title/tt8503618/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=ea4e08e1-c8a3-47b5-ac3a-75026647c16e&pf_rd_r=J771KEFSWFEG9DDHAEGR&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=moviemeter&ref_=chtmvm_tt_10`
};
let film07 = {
    naziv: "Inception",
    reziser: "Christopher Nolan",
    vremeUMin: 148, //  2h 28min
    slika: "images/Inception.jpg",
    imbdOcena: "8.8",
    link: `https://www.imdb.com/title/tt1375666/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=ea4e08e1-c8a3-47b5-ac3a-75026647c16e&pf_rd_r=J771KEFSWFEG9DDHAEGR&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=moviemeter&ref_=chtmvm_tt_37`
};
let film08 = {
    naziv: "One Flew Over the Cuckoo's Nest",
    reziser: "Milos Forman",
    vremeUMin: 133, // 2h 13min 
    slika: "images/OneFlewOverTheCuckoo'sNest.jpg",
    imbdOcena: "8.7",
    link: `https://www.imdb.com/title/tt0073486/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=ea4e08e1-c8a3-47b5-ac3a-75026647c16e&pf_rd_r=J771KEFSWFEG9DDHAEGR&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=moviemeter&ref_=chtmvm_tt_67`
};
let film09 = {
    naziv: "The Matrix",
    reziser: "Lana Wachowski",
    vremeUMin: 136, // 2h 16min 
    slika: "images/TheMatrix.jpg",
    imbdOcena: "8.7",
    link: `https://www.imdb.com/title/tt0133093/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=ea4e08e1-c8a3-47b5-ac3a-75026647c16e&pf_rd_r=J771KEFSWFEG9DDHAEGR&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=moviemeter&ref_=chtmvm_tt_81`
};
let film10 = {
    naziv: "The Lord of the Rings: The Fellowship of the Ring",
    reziser: "Peter Jackson",
    vremeUMin: 178, // 2h 58min 
    slika: "images/Lotr.jpg",
    imbdOcena: "8.8",
    link: `https://www.imdb.com/title/tt0120737/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=43EN52N2J28FD97KZ4M2&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_10`
};
// Niz filmova
let filmovi = [film01, film02, film03, film04, film05, film06, film07, film08, film09, film10];
let nizFilmoviReziseri = [film01.reziser, film02.reziser, film03.reziser, film04.reziser, film05.reziser, film06.reziser, film07.reziser, film08.reziser, film09.reziser, film10.reziser]


/* Nakon tabele dodati četiri div taga, a u njima redom ispisati:
- Najduži naziv filma
- Najučestalije ime režisera (Režiser koji je režirao najviše filmova iz niza filmova)
- Broj filmova koji traju duže od dva sata
- Broj sličica koje imaju zadat alt tekst */

// Najučestalije ime režisera (Režiser koji je režirao najviše filmova iz niza filmova)
let brojacKolikoPuta = 1;
let brojacZaRezisera = 0;
let kojReziser;
for (let i = 0; i < nizFilmoviReziseri.length; i++) {
  for (let j = i; j < nizFilmoviReziseri.length; j++) {
    if (nizFilmoviReziseri[i] == nizFilmoviReziseri[j]) brojacZaRezisera++;
    if (brojacKolikoPuta < brojacZaRezisera) {
        brojacKolikoPuta = brojacZaRezisera;
        kojReziser = nizFilmoviReziseri[i];
    }
  }
  brojacZaRezisera = 0;
}
console.log(`${kojReziser} je radio ${brojacKolikoPuta} filma`);
let divImeRezisera = `${kojReziser} je radio ${brojacKolikoPuta} filma`;

// Najduži naziv filma
let maxNaziv = 0;
let index = 0;
filmovi.forEach ( (film, i) => {
    if (film.naziv.length > maxNaziv) {
        maxNaziv = film.naziv.length;
        index = i;
    }    
});
console.log(`Naziv filma sa najduzim imenom je: 
"${filmovi[index].naziv}"`);
let najduziNazivFilma = `Naziv filma sa najduzim imenom je: 
"${filmovi[index].naziv}"`;

// Broj filmova koji traju duže od dva sata
let brojacIznadDvaSata = 0;
filmovi.forEach ( element => {
    if (element.vremeUMin > 120) {
        brojacIznadDvaSata++;
    }
});
console.log(`Broj filmova koji traju duze od 2h je: ${brojacIznadDvaSata}`);
divBrojacIznadDvaSata = `Broj filmova koji traju duze od 2h je: ${brojacIznadDvaSata}`;

// Broj sličica koje imaju zadat alt tekst
let altUSlikama = document.querySelectorAll("img");
let brojacZaAlt = 0;
altUSlikama.forEach( element => {
    if (element.alt != "") {
        brojacZaAlt++;
    }
});
console.log(`Broj slika koje u sebi sadrze "alt" je: ${brojacZaAlt}`);
let divBrojacZaAlt = `Broj slika koje u sebi sadrze "alt" je: ${brojacZaAlt}`;



let div = document.createElement("div");
let tabela = document.createElement("table");
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let div4 = document.createElement('div');

div.appendChild(tabela);
document.body.appendChild(div);
document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(div3);
document.body.appendChild(div4);

let nazivFilm = [];
let sviReziseri = [];
let brojacZaDuzinuFilma = 0;

filmovi.forEach((element, i) => {

    nazivFilm.push(element.naziv)
    sviReziseri.push(element.reziser)

    let slika = document.createElement("img");
    slika.src = element.slika;
    slika.style.width="150px"

    let text = document.createElement('p');
    let nazivSpan = document.createElement('span');
    let reziserSpan = document.createElement('span');
    let vremeUMin = document.createElement('span');

    nazivSpan.style.display="block";
    reziserSpan.style.display="block";
    vremeUMin.style.display="block";

    let tr = document.createElement('tr');
    let slikaTd = document.createElement('td');
    let textTd = document.createElement('td');

    let nazivText = document.createTextNode(element.naziv);
    let reziserText = document.createTextNode(element.reziser);
    let vremeUMinText = document.createTextNode(element.vremeUMin);

    nazivSpan.appendChild(nazivText);
    reziserSpan.appendChild(reziserText);
    vremeUMin.appendChild(vremeUMinText);

    text.appendChild(nazivSpan);
    text.appendChild(reziserSpan);
    text.appendChild(vremeUMin);
    slikaTd.appendChild(slika);

    textTd.appendChild(text);
    tr.appendChild(slikaTd);
    tr.appendChild(textTd);
    tabela.appendChild(tr);

    if (element.vremeUMin > 120) {
        brojacZaDuzinuFilma++;
        nazivSpan.style.fontWeight = "700";
    }
    if (i % 2 != 0) {
        textTd.style.backgroundColor = "yellow";
    } else {
        textTd.style.backgroundColor = "grey";
    }
    
});


najduziNazivText = document.createTextNode(najduziNazivFilma);
div1.appendChild(najduziNazivText);

najduziNazivText = document.createTextNode(divImeRezisera);
div2.appendChild(najduziNazivText);

najduziNazivText = document.createTextNode(divBrojacIznadDvaSata);
div3.appendChild(najduziNazivText);

najduziNazivText = document.createTextNode(divBrojacZaAlt);
div4.appendChild(najduziNazivText);




