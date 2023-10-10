const pokemon = require('pokemon');

const pokemonT = pokemon.all('ko');
// const pokeArray = [];

// for (let i = 0; i < pokemonT.length; i++) {
//   pokeArray[i] = pokemonT[i];
// }
// console.log(pokeArray[i]);

const pokeJOin = pokemonT.join();

console.log(pokeJOin);

const fs = require('fs');

fs.writeFileSync(
  'pokemon.html',
  `
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div#root>
      <li>${pokeJOin}</li>
    </div>
  </body>
</html>`
);

console.log(fs);
