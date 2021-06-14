import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodo, delTodo, toggleTodo } from "../actions";

import Todo from "./Todo";

const TodoList = () => {
    let key = 0;
    const todos = useSelector((state) => state.todo);
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (todo === "") return;
        dispatch(addTodo(todo));
        setTodo("");
    };

    return (
        <div>
            <form className="d-flex mb-4">
                <input
                    className="form-control"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    type="text"
                />
                <button onClick={submitHandler} type="submit" className="btn btn-sm btn-primary ">
                    SUBMIT
                </button>
            </form>
            {todos.map((todo) => {
                return (
                    <Todo
                        id={todo.id}
                        todo={todo.todo}
                        complete={todo.complete}
                        key={key++}
                        dispatch={dispatch}
                        delTodo={delTodo}
                        toggleTodo={toggleTodo}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
