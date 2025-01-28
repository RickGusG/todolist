import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Box} from '../../atoms';
import { useTodosContext } from '../../../hooks';

type TodoComponentProps = {
  label: string
  id: string
}

const Todo = ({label, id}: TodoComponentProps) => {
  const {todos, toggleTodo} = useTodosContext();
  const isChecked = todos.find(todo => todo.id === id)?.isCompleted;
  return (
    <Box borderWidth={1} borderRadius={8} borderColor="gray" flexDirection="row" justifyContent="flex-start" alignItems="center" padding={8}>
      <BouncyCheckbox fillColor="cornflowerblue" isChecked={isChecked} onPress={() => toggleTodo(id)} text={label} />
    </Box>
  );
};

export default Todo;
