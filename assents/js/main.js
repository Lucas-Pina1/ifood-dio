function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#001</span>
      <span class="name">${pokemon.name}</span>

      <div class="details">
        <ol class="types">
          <li class="type">grass</li>
          <li class="type">poison</li>
        </ol>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/oyher/dream-world/1.svg" 
          alt="${pokemon.name}"
      </div>
    </li>
  `;
}
const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});

// pokeApi.getPokemons().then((pokemons = []) => {
//   const newList = pokemons.map((pokemon) => {
//     return convertPokemonToLi(pokemon);
//   });

//   const newHtml = newList.join("");

//   pokemonList.innerHTML += newHtml;
// });
