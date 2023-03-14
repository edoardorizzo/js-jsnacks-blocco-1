let somma = 0;

for (let i = 1; i <= 10; i++) { 
  let number = parseInt(prompt("Inserisci un numero")); 
  somma += number;
}

console.log(`La somma di tutti i numeri inseriti è: ${somma}`);
