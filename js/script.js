const kmPercorsi = parseInt(prompt("Quanti Km dovrai percorrere?"));

let etàPassegero = parseInt(prompt("Quanti anni ha il viaggiatore? Scrivi solo a numeri"));

let prezzo = kmPercorsi * 0.267


if (etàPassegero < 18){
    prezzo = prezzo - (prezzo / 100 * 21)
} else if (etàPassegero > 65) {
    prezzo = prezzo - (prezzo / 100 * 42)
}

prezzo = prezzo.toFixed(2)

console.log(prezzo, etàPassegero)

