import React, { createContext, useReducer } from 'react';
import TodoCreate from "../components/todo/TodoCreate";
import TodoList from "../components/todo/TodoList";
import { initialStateTodos, TodosReducer } from '../reducers/todoReducer';

export const TodosStateContext = createContext({});

export default function TodoPage() {
    const [todoState, dispatch] = useReducer(TodosReducer, initialStateTodos);

    return (
        <TodosStateContext.Provider value={{ todoState, dispatch }}>
            <h1>Todo List</h1>
            <TodoCreate />
            <TodoList />
        </TodosStateContext.Provider>

    );
}