import { useContext } from 'react';
import { TodosContext } from '../../contexts';

const useTodosContext = () => useContext(TodosContext);

export default useTodosContext;
