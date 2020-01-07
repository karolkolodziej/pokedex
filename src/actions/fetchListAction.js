import pokeApi from "../apis/pokeApi";
import { FETCH_POKE_LIST } from "../constants/constatns";

export const fetchListAction = () => async dispatch => {
  const response = await pokeApi("/pokemon/?offset=0&limit=100");

  dispatch({ type: FETCH_POKE_LIST, payload: response.data.results });
};
