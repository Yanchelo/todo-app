import { createContext, useState, useContext } from 'react';
import * as todos from './todo.json';

const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [groups, setToDo] = useState(todos.todos);

  const updateToDos = (groupName) => {
    setToDo([...groups, { 'categorie': groupName, entries: [] }]);
  };

  const addEntryToCategory = (categoryName, newEntry) => {
    setToDo((prevGroups) =>
      prevGroups.map((group) =>
        group.categorie === categoryName
          ? { ...group, entries: [...group.entries, newEntry] }
          : group
      )
    );
  };


  return (
    <TodoContext.Provider value={{ groups, updateToDos , addEntryToCategory}}>
      {children}
    </TodoContext.Provider>
  );
};