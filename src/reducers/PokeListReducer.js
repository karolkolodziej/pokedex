import { FETCH_POKE_LIST } from "../constants/constatns";

export default (state = [], action) => {
  if (action.type === FETCH_POKE_LIST) {
    return action.payload;
  }
  return state;
};
