import { combineReducers } from "redux";

import PokeListReducer from "./PokeListReducer";

export default combineReducers({
  pokeList: PokeListReducer
});
