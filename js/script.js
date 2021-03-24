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

//stampo lista ordinata alfabeticamente

for ( var i = 0; i < listaCognomi.length; i++ ) {

   document.getElementById('surname-list').innerHTML += '<li>' + listaCognomi[i] + '</li>';

}


//stampo lista ordinata alfabeticamente



//scrivere posizione umana della lista in cui il nuovo utente si trova sia in for che while










