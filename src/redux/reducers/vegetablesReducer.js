import { vegetables } from "../../api";
import add from "../add";
import { ADD_VEGETABLE } from "../constants";

function vegetablesReducer(state = vegetables, action) {
  switch (action.type) {
    case ADD_VEGETABLE:
      return add(state,action);
    default:
      return state;
  }
}

export default vegetablesReducer;
