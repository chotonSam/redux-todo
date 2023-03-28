import { combineReducers } from "redux";
import filterReducer from './filters/reducer';
import todosReducer from "./todos/reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export default rootReducer;
