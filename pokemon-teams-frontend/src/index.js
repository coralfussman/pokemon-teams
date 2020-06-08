const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
// - Whenever a user hits `Add Pokemon` and they have
//   space on their team, they should get a new Pokemon.
// - Whenever a user hits `Release Pokemon` on a specific
//   Pokemon team, that specific Pokemon should be released from
//   the team


const body = document.querySelector("main")
const releaseBtn = document.querySelector('#release')
console.log(releaseBtn)
//<button data-trainer-id="1">Add Pokemon</button>
function renderTrainer(trainer){
    body.innerHTML += `
    <div class='card' data-id='${trainer.id}'><p>${trainer.name}</p>
    <button data-trainer-id="${trainer.id}">Add Pokemon</button>
    <ul>
    ${trainer.pokemons.map(pokemon => {
        return `<li>${pokemon.nickname} (${pokemon.species}) <button class='release' data-pokemon-id='${pokemon.id}'>Release</button></li>`
    }).join("")}
    </ul>
    </div>
    `
}
fetch(TRAINERS_URL)
.then (res => res.json())
//.then (trainers => console.log(trainers))
.then (trainers => trainers.forEach(trainer => renderTrainer(trainer)))