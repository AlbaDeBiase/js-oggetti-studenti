// creare un oggetto che rappresenta uno studente:
// ogni studente è caratterizzato da un nome, un cognome e un'età.
// Attraverso un ciclo for-in stampare a schermo
// tutte le sue proprietà e il relativo valore
// creare un array di oggetti "studente".
// Ciclare su tutti gli studenti e stampare
// per ciascuno il nome e il cognome
// tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente.
// Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.


// Creo un oggetto che rapprensenta uno studente caratterizzato
// da nome, cognome ed età
$(document).ready(function() {

var studente = {
'nome': 'Alba',
'cognome': 'De Biase',
'eta': '32'
};

// Attraverso un ciclo for-in stampare a schermo
// tutte le sue proprietà e il relativo valore
for (var key in studente) {
    console.log(key);
    console.log(studente[key]);
}

// creare un array di oggetti "studente".


var studenti =
[
{
'nome' : 'Giorgio',
'cognome' : 'Bonnarroti',
'eta' : '25'
},
{
'nome' : 'Maria',
'cognome' : 'Vittorini',
'eta' : '29'
},
{
'nome' : 'Luca',
'cognome' : 'Palestri',
'eta' : '35'
},
{
'nome' : 'Isabella',
'cognome' : 'Corazzini',
'eta' : '31'
},
{
'nome' : 'Dario',
'cognome' : 'Forato',
'eta' : '33'
},
];


// Ciclare su tutti gli studenti e stampare
// per ciascuno il nome e il cognome

for (var key in studenti) {
    console.log(key);
    console.log(studenti[key]);
}


// tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente.

var nomeStudente = prompt("inserisci nome");
var cognomeStudente = prompt("inserisci cognome");
var etaStudente = parseInt(prompt("inserisci eta"));

// Creare con questi dati un nuovo oggetto
//  e inserirlo nell'array del punto precedente.
var nuovoStudente = (nomeStudente + cognomeStudente + etaStudente);
console.log(nuovoStudente);
// var studenteCorrente = nuovoStudente;
// var studenteCorrente  =  {
// 'nome': '',
// 'cognome': '',
// 'eta': ''
// };
// function myFunction() {
// var nuovoStudente = (nomeStudente + cognomeStudente + etaStudente);
// var studenteCorrente = nuovoStudente.split(" ");
//
// console.log(studenteCorrente)
// studenti.push(nuovoStudente);
// console.log(studenti);


})