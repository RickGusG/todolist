import { AddTodo, Home } from '../../pages';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="AddTodo" component={AddTodo} options={{title: 'Adicionar tarefa'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
