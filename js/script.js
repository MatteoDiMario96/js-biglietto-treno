// -Creare una Variabile(kmPercorsi)
//     -Chiedere all'utente quanti km dovrà percorrere.
const kmPercorsi = parseInt(prompt("Quanti Km dovrai percorrere?"));

// -Creare una Variabile(etàPassegero)
//     -Chiedere all'utente l'età dell passegero.
let etàPassegero = parseInt(prompt("Quanti anni ha il viaggiatore? Scrivi solo a numeri"));

// -Creare una variabile(prezzo) = km * soldi
let prezzo = kmPercorsi * 0.267;

//Se il passegero ha meno di 18 anni sconto del 21%
if (etàPassegero < 18){
    prezzo = prezzo - (prezzo / 100 * 21)
} else if (etàPassegero > 65) { //Se ha più di 65 anni sconto del 42%
    prezzo = prezzo - (prezzo / 100 * 42)
};

// -Arrotondare in due cidre decimali la Variabile prezzo 
prezzo = prezzo.toFixed(2) + "€";

// -Mostrare prezzo.
console.log(prezzo, etàPassegero);

document.getElementById("prezzoBiglietto").innerHTML = prezzo 

