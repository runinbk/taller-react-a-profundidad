
import {TodoCounter} from "./components/TodoCounter"
import {TodoSearch} from "./components/TodoSearch"
import {TodoList} from "./components/TodoList"
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

import './App.css';

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React.js", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Lalalalal", completed: false },
]

function App() {
  return (
    <>

      <TodoCounter completed={16} total={1}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />

    </>
  );
}


export default App;