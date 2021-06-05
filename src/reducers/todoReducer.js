let id = 0;
const newTodo = (todo) => {
    return { id: id++, todo: todo, complete: false };
};

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, newTodo(action.payload.todo)];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload.id);
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        complete: !todo.complete,
                    };
                }
                return todo;
            });
        default:
            return state;
    }
};

export default todoReducer;
