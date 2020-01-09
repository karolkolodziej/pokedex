import { FETCH_SINGLE_POKEMON } from "../constants/constatns";

export default (pokemonDetails = null, action) => {
  if (action.type === FETCH_SINGLE_POKEMON) {
    return action.payload;
  }
  return pokemonDetails;
};
