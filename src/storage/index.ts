import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodoProps } from '../contexts/TodosContext';

const storeData = async (value: TodoProps[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('todos', jsonValue);
  } catch (e) {
    console.warn(e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('todos');
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.warn(e);
  }
};

export { getData, storeData };
