import './App.css';
import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";

function App() {
  return (
    <div className="App">
      <div className="App-todo">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
