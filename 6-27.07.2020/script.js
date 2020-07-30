// 1. Zadatak
console.log("1. Zadatak")

let d1 = 10*60 + 12;
let o1 = 18*60 + 4;

let d2 = 19*60 + 21;
let o2 = 22*60 + 22;
let razlika;

if (o1 < d2 || o2 < d1) {
    razlika = 0;
    console.log("Slucaj 1");
} else if (d1 == d2 && o1 == o2) {
    razlika = (o1 - d1);
    console.log("Slucaj 2");
}
else if (d1 == d2 && o1 < o2) {
    razlika = (o1 - d1);
    console.log("Slucaj 3"); 
}
else if (d1 == d2 && o1 > o2) {
    razlika = (o2 - d2);
    console.log("Slucaj 4");
}
else if (d1 < d2 && o1 == o2) {
    razlika = (o2 - d2);
    console.log("Slucaj 5");
}
else if (d1 > d2 && o1 == o2) {
    razlika = (o1 - d1);
    console.log("Slucaj6");
}
else  if (d1 < d2 && o1 < o2) {
    razlika = (o1 - d2);
    console.log("Slucaj 7");
}
else if (d1 > d2 && o1 > o2) {
    razlika = (o2 - d1);
    console.log("Slucaj 8");
}
else if (d1 < d2 && o1 > o2) {
    razlika = (o2 -d2);
    console.log("Slucaj 9");
}
else if (d1 > d2 && o1 < o2) {
    razlika = (o1 - d1);
    console.log("Slucaj 10");
}
else {
    razlika = 0;
}

let min = razlika % 60;
let sati = Math.trunc(razlika / 60);
if (razlika == 0) {
    console.log("Nema preklapanja.");
    document.getElementById("z1").innerHTML=`Nema preklapanja.`;
    document.getElementById("z1").style.color="red";
}
else {
console.log(`Preklapaju je se ${sati} sati i ${min} minuta.`);

document.getElementById("z1").innerHTML=`Preklapaju je se ${sati} sati i ${min} minuta.`;
document.getElementById("z1").style.color="red";
}



// 2. Zadatak
console.log("2. Zadatak");

let n = 3; // broj gostiju
console.log(`Trenutan broj gostiju : ${n}`);
let v = 8; // povrsina kafica
let ppg = 3 // dozvoljena povrsina po gostu
let max = Math.trunc(v / ppg); // dozvoljen broj gostiju
console.log(`Dozvoljen broj gostiju : ${max}`);

let mere;

if (n <= max) {
    mere = "Mere SE postuju."
    console.log("Mere SE postuju.");
}
else {
    mere = "Mere se NE postoju."
    console.log("Mere se NE postoju.");
}
if (n > max) {
    mere = `${n - max} treba da napusti objekat.`;
    console.log(`${n - max} treba da napusti objekat.`);
}

document.getElementById("z2").innerHTML=`Dozvoljen broj gostiju : ${max}, a ${mere}`;
document.getElementById("z2").style.color="blue";


// 3.Zadatak
console.log("3. Zadatak");

let time = new Date();
let mesec = time.getMonth() + 1;
let dan = time.getDate();
let godina = time.getFullYear();
console.log(`Trenutno je ${dan}.`);
let text;

switch (mesec) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log(`Do kraja meseca ostalo je ${31 - dan} dana.`);
        text = 31 - dan;
        break;
    case 4: case 6: case 9: case 11:
        console.log(`Do kraja meseca ostalo je ${30 - dan} dana.`);
        text = 30 - dan;
        break;
    case 2:
        if((godina%4==0 && godina%100!=0) || godina%400==0){
            console.log(`Do kraja meseca ostalo je ${29 - dan} dana.`);
            text = 29 - dan;
        } else {
            console.log(`Do kraja meseca ostalo je ${28 - dan} dana.`);
            text = 28 - dan;
        }
}
 document.getElementById("z3").innerHTML=`Trenutno je ${dan}. , a do kraja meseca ostalo je ${text} dana.`;
 document.getElementById("z3").style.color="green";



