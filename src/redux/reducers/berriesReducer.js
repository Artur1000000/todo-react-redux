import { berries } from "../../api";
import { ADD_BERRY } from "../constants";
import add from "../add";

function berriesReducer(state = berries, action) {
  switch (action.type) {
    case ADD_BERRY:
      return add(state,action);
    default:
      return state;
  }
}

export default berriesReducer;
