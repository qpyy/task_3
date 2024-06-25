import { useState } from "react";
import TodoForm from "../TodoForm";
import Todo from "../Todo";

const Main = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.trim() === "") {
      alert("Введите текст задачи!");
      return;
    }

    setTodos([...todos, { id: Date.now(), task: todo, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main>
      <h1>Задачи на сегодня!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
    </main>
  );
};

export default Main;
