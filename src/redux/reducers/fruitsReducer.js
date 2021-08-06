import { fruits } from "../../api";
import { ADD_FRUIT } from "../constants";

function fruitsReducer(state = fruits, action) {
  switch (action.type) {
    case ADD_FRUIT:
      return { list: [...state.list, action.payload], title: state.title };
    default:
      return state;
  }
}

export default fruitsReducer;
