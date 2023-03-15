let empty = [];


for (let i = 0; i < 6; i++) {
    let userNumber = Number(prompt('Inserisci un numero'));
    
    if (userNumber % 2 !== 0) {
        empty.push(userNumber);
    } 
}
 
if (empty.length > 0) {
    console.log(`Numeri dispari ${empty}`);
}   else {
    console.log('Non ci sono numeri dispari');
}