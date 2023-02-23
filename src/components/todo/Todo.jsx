import React, { useState } from 'react';

const Todo = ({ todo }) => {
    const [isEdit, setIsEdit] = useState(false);


    const deleteTodo = (id) => {

    }

    const onSubmit = () => {

    }

    return (
        <li>
            {!isEdit ?
                <>
                    <label>
                        <input type="checkbox" defaultChecked={todo.isCompleted} />
                        <span>{todo.todo}</span>
                    </label>
                    <button data-testid="modify-button">수정</button>
                    <button data-testid="delete-button">삭제</button>
                </>
                :
                <form onSubmit={onSubmit}>
                    <label>
                        <input data-testid="modify-input" type="text" defaultValue={todo.todo} />
                    </label>
                    <button data-testid="submit-button">수정완료</button>
                    <button data-testid="cancel-button">취소</button>
                </form>
            }

        </li>
    );
};

export default Todo;