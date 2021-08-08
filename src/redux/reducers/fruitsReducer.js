import { fruits } from "../../api";
import add from "../add";
import { ADD_FRUIT } from "../constants";

function fruitsReducer(state = fruits, action) {
  switch (action.type) {
    case ADD_FRUIT:
      return add(state,action);
    default:
      return state;
  }
}

export default fruitsReducer;
