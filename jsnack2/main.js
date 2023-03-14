const firstWord = prompt('Inserisci la prima parola');
const secondWord = prompt('Inserisci la seconda parola');

if (firstWord.length < secondWord.length) {
  console.log(firstWord);
  console.log(secondWord);
} else if (firstWord.length > secondWord.length) {
    console.log(secondWord);
    console.log(firstWord);
} else {
    console.log('Le parole sono lunghe uguali');
}
