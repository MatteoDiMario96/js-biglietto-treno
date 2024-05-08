//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.276 € al km)
va applicato uno sconto del 21% per i minorenni
va applicato uno sconto del 42% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]//


-Creare una Variabile(kmPercorsi)
    -Chiedere all'utente quanti km dovrà percorrere. 

-Creare una Variabile(etàPassegero)
    -Chiedere all'utente l'età dell passegero.

-Creare una variabile(prezzo) = km * soldi

- if (il passegero ha < 18 anni 21% sconto){
    (prezzo  / 100 * 21) - prezzo
} - else if (il passegero ha più di 65 anni) {
    (prezzo  / 100 * 42) - prezzo
}

-Arrotondare in due cidre decimali la Variabile prezzo 

-Mostrare prezzo.


