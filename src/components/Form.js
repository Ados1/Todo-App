import React from "react";
import { useState, useContext } from "react";
import { ThemeContext } from "../ContextTheme";
const Form = ({ addHandler }) => {
  const [userInput, setUserInput] = useState("");

  const { darkTheme } = useContext(ThemeContext);

  const handleForm = (e) => {
    e.preventDefault();
    addHandler(userInput);
    setUserInput("");
  };
  return (
    <div
      className={
        darkTheme
          ? `bg-slate-900 my-5  py-2 rounded form dark lg:w-3/6  mx-auto`
          : `bg-white my-5 py-2 rounded form lg:w-3/6 mx-auto`
      }
    >
      <form onSubmit={handleForm} className="flex items-center">
        <div className="w-full ">
          <input
            name="todoItem"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            required
            placeholder="Create new Todo item"
            type="text"
            className={
              darkTheme
                ? `bg-slate-900 px-3 rounded-md form dark h-7 text-sm block w-full focus:outline-none`
                : `bg-white px-3  rounded-md form h-7 text-sm block w-full  focus:outline-none`
            }
          />
        </div>
        <button
          type="submit"
          className="bg-blue-900 inline-flex px-3 py-1 mx-2 items-center font-medium text-white rounded-lg"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
