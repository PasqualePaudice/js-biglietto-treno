
// chilometri da percorrere
var numero_chilometri = prompt("Inserisci i chilometri da percorrere");



document.getElementById('num_km').innerHTML = numero_chilometri;


// anni cliente
var anni_cliente = prompt("Quanti anni hai");

document.getElementById('anni').innerHTML = anni_cliente;


// prezzo biglietto
var prezzo_biglietto = numero_chilometri * 0.21;

if (anni_cliente < 18) {

    prezzo_biglietto = Math.floor(prezzo_biglietto);
    prezzo_biglietto = prezzo_biglietto - (prezzo_biglietto * 20) /100;
    console.log('Costo biglietto = ' +  Math.floor(prezzo_biglietto));

}else if (anni_cliente >= 60) {

    prezzo_biglietto = Math.floor(prezzo_biglietto);
    prezzo_biglietto = prezzo_biglietto - ((prezzo_biglietto * 40) /100);
    console.log('Costo biglietto = ' + Math.floor(prezzo_biglietto));

}else {
    prezzo_biglietto = Math.floor(prezzo_biglietto);
    console.log('Costo biglietto = ' +  prezzo_biglietto);
}

document.getElementById('prezzo').innerHTML = prezzo_biglietto ;
