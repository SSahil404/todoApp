export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: { todo: todo },
    };
};
export const delTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: { id: id },
    };
};
export const toggleTodo = (id) => {
    return {
        type: "COMPLETE",
        payload: { id: id },
    };
};
