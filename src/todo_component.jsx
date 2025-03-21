import { createContext, useState, useContext } from 'react';
import * as todos from './todo.json';
const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

// eslint-disable-next-line react/prop-types
export const TodoProvider = ({ children }) => {
  const [groups, setToDo] = useState(todos.todos);

  const updateToDos = (groupName) => {
    setToDo([...groups, { 'categorie': groupName, entries: [] }]);
  };

  return (
    <TodoContext.Provider value={{ groups, updateToDos }}>
      {children}
    </TodoContext.Provider>
  );
};