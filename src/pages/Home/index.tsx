/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import { Box } from '../../components/atoms';
import { Button, Container } from '../../components/molecules';
import { Todo } from '../../components/molecules';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTodosContext } from '../../hooks';
import { useEffect } from 'react';
import { getData } from '../../storage';

const Home = () => {
  const {navigate} = useNavigation<NativeStackNavigationProp<{AddTodo: any}>>();
  const {todos, clearDoneTodos, updateTodos} = useTodosContext();

  const fetchTodos = async () => {
    const data = await getData();
    console.log(data);
    updateTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Container>
      <Box flexDirection="row" gap={10} >
        <Button marginBottom={16} onPress={() => navigate('AddTodo')} label="Adicionar tarefa"/>
        <Button marginBottom={16} onPress={clearDoneTodos} label="Limpar concluidas" color="crimson" />
      </Box>
      {todos.map((todo: any, index: number) => (
        <Todo key={index}  label={todo?.label} id={todo.id} />
      ))}
    </Container>
  );
};

export default Home;
