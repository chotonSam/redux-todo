import { deleteTodo } from "../actions";

const deleteTodoServer = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleteTodo(todoId));
  };
};

export default deleteTodoServer;