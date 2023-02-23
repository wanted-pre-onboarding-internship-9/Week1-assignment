import React, { useContext } from 'react';
import { todoApis } from "../../apis/todo"
import { TodosStateContext } from '../../pages/TodoPage';

const TodoCreate = () => {
    const { dispatch } = useContext(TodosStateContext);


    const onSubmit = (event) => {
        event.preventDefault();
        const todo = {
            todo: event.target[0].value
        }
        todoApis.createTodoAX(todo)
            .then((res) => {
                dispatch({ type: "CREATE", data: res.data });
                event.target[0].value = "";
            })
    }

    return (
        <form onSubmit={onSubmit}>
            <input data-testid="new-todo-input" />
            <button type='submit' data-testid="new-todo-add-button">추가</button>
        </form>
    );
};

export default TodoCreate;