import {
  ADD,
  ALLCOMPLETE,
  CLEARCOMPLETE,
  COLORSELECT,
  DELETE,
  LOADED,
  TOGGLE
} from "./actionTypes";
import initialState from "./initialState";

const nextTOdoId = (todos) => {
  const maxID = todos.reduce((maxID, todo) => Math.max(todo.id, maxID), -1);
  return maxID + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADD:
      return [
        ...state,
        {
          id: nextTOdoId(state),
          text: action.payload,
          completed: false,
        },
      ];

    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);

    case TOGGLE:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case COLORSELECT:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case ALLCOMPLETE:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETE:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default reducer;
