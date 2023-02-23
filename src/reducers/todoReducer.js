export const initialStateTodos = [];


export const TodosReducer = (state, action) => {
    switch (action.type) {
        case "READ":
            return state = action.todo;
        case "CREATE":
            return state.concat(action.data);
        case "UPDATE":
            return state.map((data) =>
                data.id === action.data.id
                    ? {
                        ...data,
                        todo: action.data.todo,
                        isCompleted: action.data.isCompleted,
                    }
                    : data
            );
        case "DELETE":
            return state.filter((todo) => todo.id !== action.id);
        default:
            throw new Error("Unhandled action");
    }
}
