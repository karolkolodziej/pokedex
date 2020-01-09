import { combineReducers } from "redux";

import PokeListReducer from "./PokeListReducer";
import PokemonDetailReducer from "./PokemonDetailReducer";

export default combineReducers({
  pokeList: PokeListReducer,
  pokemonDetail: PokemonDetailReducer
});
