let somma = 0;

for (let i = 1; i <= 10; i++) { 
  let number = parseInt(prompt("Inserisci un numero")); 
  somma = somma + number;
}

console.log(`La somma di tutti i numeri è: ${somma}`);
