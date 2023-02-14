import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/registration/Login";
import TodoList from "./components/todo-list/TodoList";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todos" element={<TodoList />}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
