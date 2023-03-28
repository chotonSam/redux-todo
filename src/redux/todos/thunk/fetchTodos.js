import { loaded } from "../actions";

const fetchTodos = async (dispatch) => {
    const response = await fetch("https://json-db-server.onrender.com/todos");
    const todos = await response.json();

    dispatch(loaded(todos));
};

export default fetchTodos;