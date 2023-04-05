const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

let offset = 0;
const limit = 5;

function loadMorePokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map((pokemon) => {
        `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types
                  .map((type) => `<li class="type ${type}">${type}</li>`)
                  .join("")}
            </ol>
            <img src="${pokemon.photo}"
                 alt="${pokemon.name}">
        </div>
    </li>
  `;
      })
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadMorePokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  loadMorePokemonItens();
});

// pokeApi.getPokemons().then((pokemons = []) => {
//   const newList = pokemons.map((pokemon) => {
//     return convertPokemonToLi(pokemon);
//   });

//   const newHtml = newList.join("");

//   pokemonList.innerHTML += newHtml;
// });
