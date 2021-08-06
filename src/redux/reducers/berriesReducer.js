import { berries } from "../../api";
import { ADD_BERRY } from "../constants";

function berriesReducer(state = berries, action) {
  switch (action.type) {
    case ADD_BERRY:
      return { list: [...state.list, action.payload], title: state.title };
    default:
      return state;
  }
}

export default berriesReducer;
