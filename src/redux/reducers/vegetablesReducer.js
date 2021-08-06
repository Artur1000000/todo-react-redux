import { vegetables } from "../../api";
import { ADD_VEGETABLE } from "../constants";

function vegetablesReducer(state = vegetables, action) {
  switch (action.type) {
    case ADD_VEGETABLE:
      return { list: [...state.list, action.payload], title: state.title };
    default:
      return state;
  }
}

export default vegetablesReducer;
