import { combineReducers } from "redux";
import berriesReducer from "./reducers/berriesReducer";
import fruitsReducer from "./reducers/fruitsReducer";
import vegetablesReducer from "./reducers/vegetablesReducer";


export default combineReducers({
    vegetablesReducer:vegetablesReducer,
    fruitsReducer:fruitsReducer,
    berriesReducer:berriesReducer,
});