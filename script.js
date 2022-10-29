/* 
### Descrizione Problema
Ci viene chiesto di creare e stampare in console una frase contenente N parole 
(dove il valore di N è definito in una costante) sfruttando una API e che 
genera parole casuali.

### Step 1
Per prima cosa analizza l'API per vedere il tipo di risposta:
L'endpoint restituisce *una sola parola per chiamata*, quindi per generare la 
lista dovremo fare N chiamate.
Attenzione: non fidarti mai di una API esterna; ricorda di gestire possibili
errori (ad es. errori 5xx o 4xx oppure il formato della risposta o se mancano dati).

### Step 2
Accumula tutte le parole ottenute in un array chiamando N volte l'API e 
infine crea la frase concatenando la lista di parole ottenute.
Una volta riempito l'array trova un modo per concatenare le parole in 
un'unica frase;
*/

console.log("js ok");

const url = "https://flynn.boolean.careers/exercises/api/random/word";
const totalrndWords = 10;

let rndWord = "";
let arrayRndWords = [];
let randomSentence = '';

let i = 0;
while (i < totalrndWords) {
  await axios
    .get(url)
    .then((res) => {
      rndWord = res.data.response;
      if (!arrayRndWords.includes(rndWord)) {
        arrayRndWords.push(rndWord);
        i++;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

randomSentence = arrayRndWords.join(' ');
console.log(randomSentence);