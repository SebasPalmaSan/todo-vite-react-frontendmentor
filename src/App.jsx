import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

// const initialStateTodos = [
//   { id: 1, title: 'Go to the gys', completed: true},
//   { id: 2, title: 'Complete online JavaScript Bluuweb Curse', completed: false},
//   { id: 3, title: 'Go to the supermarket', completed: false},
//   { id: 4, title: '10 min meditation', completed: false},
//   { id: 5, title: 'Complete todo app on frontend mentor', completed: true},
// ]

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id? {...todo, completed: !todo.completed} : todo))
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch(filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 
    dark:bg-gray-800 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
    md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      
      <Header />

      <main className="container mx-auto px-4 mt-8 md:max-w-xl">

        <TodoCreate createTodo={createTodo} />

        <TodoList 
          todos={filteredTodos()} 
          updateTodo={updateTodo} 
          removeTodo={removeTodo} 
        />

        <TodoComputed 
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted} 
        />

        <TodoFilter changeFilter={changeFilter} />

      </main>

      <footer className="text-center mt-8 transition-all duration-1000 dark:text-gray-400">
        Drag and drop to reorder list
      </footer>
      
    </div>
    
  ); 
};


export default App;