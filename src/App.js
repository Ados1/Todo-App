import { useState, useContext } from "react";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import "./App.css";
import "./index.css";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import FilterNav from "./components/FilterNav";
import { ThemeContext } from "./components/ContextTheme";

function App() {
  const [todolist, setTodoList] = useState([]);
  const [filter, setfilter] = useState("all");
  const { darkTheme, themeHandler } = useContext(ThemeContext);
  const addTodo = (userInput) => {
    const newTodo = {
      id: Date.now(),
      text: userInput,
      status: false,
    };

    setTodoList((prevData) => [newTodo, ...prevData]);
  };

  const removeTodoById = (id) => {
    const todoItems = todolist.filter((todo) => todo.id !== id);

    setTodoList(todoItems);
  };

  const toggleTodoStatus = (id) => {
    setTodoList(
      todolist.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      })
    );
  };

  const clearCompletedTodos = () => {
    const todoItems = todolist.filter((todo) => !todo.status);
    setTodoList(todoItems);
  };

  const updateFilterValue = (value) => setfilter(value);

  const getTodoCount = (filter) => {
    if (filter === "all") {
      return todolist.length;
    } else if (filter === "active") {
      return todolist.filter((todo) => !todo.status).length;
    } else if (filter === "complete") {
      return todolist.filter((todo) => todo.status).length;
    }
    return 0;
  };

  const renderTodolist = () => {
    let filteredTodo = todolist;
    if (filter === "all") {
      filteredTodo = todolist;
    } else if (filter === "active") {
      filteredTodo = todolist.filter((todo) => !todo.status);
    } else if (filter === "complete") {
      filteredTodo = todolist.filter((todo) => todo.status);
    }

    return filteredTodo.map((item) => (
      <TodoItem
        todoData={item}
        deleteItem={removeTodoById}
        statusUpdate={toggleTodoStatus}
        key={item.id}
      />
    ));
  };
  return (
    <div
      className={`${
        darkTheme ? "bg-slate-900 text-white" : "bg-[#F2F2F2]"
      } min-h-screen pb-20 relative`}
    >
      <div className="h-52 px-5 pt-10 bg-no-repeat bg-cover bg-[url('./assets/bg-mobile-light.jpg')]">
        <div className="flex justify-between lg:w-3/6 lg:mx-auto">
          <p className="text-3xl font-semibold text-white tracking-[6px]">
            TODO
          </p>

          <img
            src={darkTheme ? sun : moon}
            alt="bg-img"
            onClick={themeHandler}
            className="h-5 w-5"
          />
        </div>
        <div>
          <Form addHandler={addTodo} />
        </div>
      </div>

      <div
        className={`${
          darkTheme ? "bg-[#25273D] text-white" : "bg-white"
        } relative -top-8 rounded-md  lg:w-3/6 mx-auto`}
      >
        <FilterNav filterHandler={updateFilterValue} />
        {renderTodolist()}

        <div className="flex justify-between px-5 items-center h-14 text-sm lg:text-[16px]">
          <p>{getTodoCount(filter)} Items</p>
          <button onClick={clearCompletedTodos} type="button">
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
