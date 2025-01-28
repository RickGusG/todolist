import { TodosContextProvider } from '../contexts';
import { Navigator } from '../routes';

const App = () => {
  return (
    <TodosContextProvider>
      <Navigator/>
    </TodosContextProvider>
  );
};

export default App;
