import React, { useContext, useEffect } from 'react';
import { todoApis } from "../../apis/todo"
import { TodosStateContext } from '../../pages/TodoPage';
import Todo from './Todo';

const TodoList = () => {
    //const [todoState, dispatch] = useReducer(TodosReducer, initialStateTodos);

    const { todoState, dispatch } = useContext(TodosStateContext);

    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = async () => {
        const result = await todoApis.getTodosAX();
        dispatch({ type: "READ", todo: result.data });
        // .then((res) => {
        //     dispatch({ type: "READ", todo: res.data });
        // })
    }

    useEffect(() => {
        console.log("todoState", todoState);

    }, [todoState])
    return (
        <div>
            <ul>
                {todoState.map((todo) => {
                    return (
                        <Todo todo={todo} />
                    )
                })}
            </ul>
        </div>
    );
};

export default TodoList;