import React from "react";

const Todo = ({ id, todo, complete, dispatch, delTodo, toggleTodo }) => {
    return (
        <div className="container d-flex justify-content-between my-1">
            <h3 style={{ opacity: complete ? "0.25" : "1" }} className="text-light">
                {todo}
            </h3>
            <div className="buttons">
                <button onClick={() => dispatch(toggleTodo(id))} className="btn btn-sm btn-success">
                    CPT
                </button>
                <button onClick={() => dispatch(delTodo(id))} className="btn btn-sm btn-warning">
                    DEL
                </button>
            </div>
        </div>
    );
};

export default Todo;
