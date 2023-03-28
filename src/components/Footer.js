import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChange, statusChange } from "../redux/filters/actions";

const lengthHandler = (todoNumber) => {
  switch (todoNumber) {
    case 0:
      return "No task";
    case 1:
      return "1 task";

    default:
      return `${todoNumber} tasks`;
  }
};

const Footer = () => {
  const filters = useSelector((state) => state.filter);
  const todos = useSelector((state) => state.todos);

  const todoRemining = todos.filter((todo) => !todo.completed).length;

  const { status, colors } = filters;

  const dispatch = useDispatch();

  const statusHandler = (statusName) => {
    dispatch(statusChange(statusName));
  };

  const colorHandler = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChange(color, "removed"));
    } else {
        dispatch(colorChange(color, "added"));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{lengthHandler(todoRemining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => {
            statusHandler("All");
          }}
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => {
            statusHandler("Incomplete");
          }}
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => {
            statusHandler("Complete");
          }}
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => colorHandler("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && "bg-green-500"}`}
        ></li>
        <li
          onClick={() => colorHandler("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && "bg-red-500"}`}
        ></li>
        <li
          onClick={() => colorHandler("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && "bg-yellow-500"}`}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
