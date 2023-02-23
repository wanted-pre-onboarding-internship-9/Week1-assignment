import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { todoApis } from "../../apis/todo"
import { TodosStateContext } from '../../pages/TodoPage';

const Todo = ({ todo }) => {
    const [isEdit, setIsEdit] = useState(false);
    const { dispatch } = useContext(TodosStateContext);

    const deleteTodo = (id) => {
        if (!window.confirm('삭제하시겠습니까?')) return;
        todoApis.deleteTodoAX(id)
            .then((res) => {
                res.status === 204 && dispatch({ type: "DELETE", id: id });
            })
    }

    const editHandle = () => {
        setIsEdit(!isEdit);
    }

    const updateTodo = (type, inputTodo) => {
        if (type === "todo" && inputTodo === todo.todo) return;
        todoApis.updateTodoAX({
            id: todo.id,
            todo: {
                todo: type === "todo" ? inputTodo : todo.todo,
                isCompleted: type === "checked" ? !todo.isCompleted : todo.isCompleted,
            }
        }).then((res) => {
            if (res.status === 200) {
                dispatch({ type: "UPDATE", data: res.data });
                if (type === "todo") setIsEdit(!isEdit);
            }

        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        updateTodo("todo", event.target[0].value);

    }

    return (
        <StTodoWrap>
            {!isEdit ?
                <>
                    <label>
                        <input type="checkbox" defaultChecked={todo.isCompleted} onClick={() => updateTodo("checked")} />
                        <span>{todo.todo}</span>
                    </label>
                    <button data-testid="modify-button" onClick={editHandle}>수정</button>
                    <button data-testid="delete-button" onClick={() => { deleteTodo(todo.id) }}>삭제</button>
                </>
                :
                <form onSubmit={onSubmit}>
                    <label>
                        <input data-testid="modify-input" type="text" defaultValue={todo.todo} />
                    </label>
                    <button data-testid="submit-button" type="submit">수정완료</button>
                    <button data-testid="cancel-button" onClick={editHandle}>취소</button>
                </form>
            }
        </StTodoWrap>
    );
};

export default Todo;

const StTodoWrap = styled.li`
    list-style: none;
`