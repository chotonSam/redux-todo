import {
  ADD,
  ALLCOMPLETE,
  CLEARCOMPLETE,
  COLORSELECT,
  DELETE, LOADED, TOGGLE
} from "./actionTypes";

export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  };
};

export const add = (todoText) => {
  return {
    type: ADD,
    payload: todoText,
  };
};


export const allComplete = () => {
  return {
    type: ALLCOMPLETE,
  };
};

export const clearComplete = () => {
  return {
    type: CLEARCOMPLETE,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE,
    payload: todoId,
  };
};

export const colorSelect = (todoId, color) => {
  return {
    type: COLORSELECT,
    payload: {
      todoId,
      color,
    },
  };
};

export const toggle = (todoId) => {
  return {
    type: TOGGLE,
    payload: todoId,
  };
};
