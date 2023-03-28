import { COLOR, STATUS } from "./actionTypes";

export const statusChange = (status) => {
  return {
    type: STATUS,
    payload: status,
  };
};

export const colorChange = (color, changeType) => {
  return {
    type: COLOR,
    payload: {
      color,
      changeType,
    },
  };
};
