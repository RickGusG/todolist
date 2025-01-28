import { useEffect, useId, useState } from 'react';
import { Input } from '../../components/atoms';
import { Button, Container } from '../../components/molecules';
import { useNavigation } from '@react-navigation/native';
import { useTodosContext } from '../../hooks';

const AddTodo = () => {
  const [task, setTask] = useState('');
  const {goBack} = useNavigation();
  const {addTodo} = useTodosContext();
  const id = useId();

  useEffect(() => {
    const timeout = setTimeout(() => {}, 250);
    return () => clearTimeout(timeout);
  }, [task]);

  const onPressAdd = () => {
    addTodo({id, label: task, isCompleted: false});
    goBack();
  };

  return (
    <Container>
      <Input onChangeText={(value: string) => setTask(value)} value={task} placeholder="Nome da tarefa" />
      <Button marginTop={16} width="100%" onPress={onPressAdd} label="Adicionar tarefa" />
    </Container>
  );
};

export default AddTodo;
