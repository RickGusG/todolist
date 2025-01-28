import { createContext, PropsWithChildren, useState } from 'react';
import { storeData } from '../../storage';

export type TodoProps = {
  id: string;
  label: string;
  isCompleted: boolean;
};

const initialValue: {todos: TodoProps[], addTodo: (todo: TodoProps) => void, clearDoneTodos: () => void, toggleTodo: (id: string) => void, updateTodos: (todos: TodoProps[]) => void} = {
  todos: [],
  addTodo: (_todo: TodoProps) => {},
  clearDoneTodos: () => {},
  toggleTodo: (_id: string) => {},
  updateTodos: (_todos: TodoProps[]) => {},
};

const TodosContext = createContext(initialValue);

const TodosContextProvider = ({children}: PropsWithChildren) => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const updateTodos = (newTodos: TodoProps[]) => {
    setTodos(newTodos);
  };

  const toggleTodo = async (id: string) => {
    const newArr = [...todos];
    const mapped = newArr.map((todo: TodoProps) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo);
    setTodos(mapped);
    storeData(mapped);
  };

  const addTodo = (todo: TodoProps) => {
    const newArr = [...todos, todo];
    setTodos(newArr);
    storeData(newArr);
  };

  const clearDoneTodos = () => {
    const newArr = [...todos];
    const filtered = newArr.filter((todo: TodoProps) => !todo.isCompleted);
    setTodos(filtered);
    storeData(filtered);
  };

  return (
    <TodosContext.Provider value={{todos, addTodo, clearDoneTodos, toggleTodo, updateTodos}}>
      {children}
    </TodosContext.Provider>
  );
};

export {TodosContext, TodosContextProvider};
