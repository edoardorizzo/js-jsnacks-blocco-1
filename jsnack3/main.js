let somma = 0;

for (let i = 1; i <= 3; i++) { 
  let number = parseInt(prompt("Inserisci un numero")); 
  somma = somma + number;
}

console.log(`La somma di tutti i numeri è: ${somma}`);

// while

let jo = 0;

while (jo <= 3) {
  let number = parseInt(prompt("Inserisci un numero")); 
  somma = somma + number;
  jo++
}

console.log(`La somma di tutti i numeri è: ${somma}`);