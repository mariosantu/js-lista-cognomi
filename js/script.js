// Creo array cognomi 

var listaCognomi = [
    'santucci',
    'zannettone',
    'Barletta',
    'musella',
    'esposito',
    'cusano'
]



console.log(listaCognomi);

//Chiedo il nome all'utente

var cognomeUtente = prompt('Dimmi il tuo cognome :')
console.log(cognomeUtente);


//pusho nomeutente in array
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

// ordino lista alfabeticamente
listaCognomi.sort();

//stampo lista ordinata alfabeticamente

for ( var i = 0; i < listaCognomi.length; i++ ) {

   document.getElementById('surname-list').innerHTML += '<li>' + listaCognomi[i] + '</li>';
 
}


//scrivere posizione umana della lista in cui il nuovo utente si trova sia in for che while

//posizione umana for

//var numeroNuovoUtente = '';

//for ( var i = 0; i < listaCognomi.length; i++ ) {

    //if (listaCognomi[i] == cognomeUtente) {
        //numeroNuovoUtente = i + 1;
        //alert('la tua posizione in lista è la numero : ' + numeroNuovoUtente);
    //}
//}


//posizione umana while

var  numeroNuovoUtente = '';

var i = 0;
while ( i < listaCognomi.length ) {

    if ( listaCognomi[i] == cognomeUtente ) {

        numeroNuovoUtente = i + 1;
        alert('la tua posizione in lista è la numero : ' + numeroNuovoUtente);
    }

    i++;
}
 
console.log(numeroNuovoUtente);









