import { deleteTodo } from "../actions";

const deleteTodoServer = (todoId) => {
  return async (dispatch) => {
    await fetch(`https://json-db-server.onrender.com/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleteTodo(todoId));
  };
};

export default deleteTodoServer;
