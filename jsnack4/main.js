let invites = [
    'Paolo',
    'Giovanni',
    'Carlo',
    'William'
]

let userName = prompt("Qual è il tuo nome?");

let invitato = false;

for (let i = 0; i < invites.length; i++) {
  if (invites[i] === userName) {
    invitato = true;
  }
}

//while
let j = 0

while (j < invites.length){
    if (invites[j] === userName) {
      invitato = true;
    }

    j++
  }

if (invitato) {
  console.log("Sei invitato alla festa del Grande Gatsby!");
} else {
  console.log("Mi dispiace, non sei stato invitato alla festa del Grande Gatsby.");
}

