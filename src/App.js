import React from "react";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="App bg-dark text-light">
            <div className="container py-5">
                <h2>Add A Todo</h2>
                <TodoList />
            </div>
        </div>
    );
}

export default App;
