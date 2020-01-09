import pokeApi from "../apis/pokeApi";
import { FETCH_SINGLE_POKEMON } from "../constants/constatns";

export const fetchSinglePokemonAction = number => async dispatch => {
  const response = await pokeApi(`/pokemon/${number}`);

  dispatch({
    type: FETCH_SINGLE_POKEMON,
    payload: response
  });
};
