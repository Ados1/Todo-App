import React from "react";
import { MdDeleteForever, MdCheck, MdCancel } from "react-icons/md";

const TodoItem = ({ todoData, deleteItem, statusUpdate }) => {
  return (
    <div className="h-14 px-5 flex items-center">
      <div className="flex w-full justify-between">
        <div className="flex items-center justify-between">
          {todoData.status ? (
            <MdCheck
              onClick={() => statusUpdate(todoData.id)}
              className="text-blue-500 h-5 w-4 mr-3"
            />
          ) : (
            <MdCancel
              onClick={() => statusUpdate(todoData.id)}
              className="text-blue-500 h-5 w-4 mr-3"
            />
          )}

          <p className={`${todoData.status && "line-through"}text-gray-500`}>
            {todoData.text}
          </p>
        </div>
        <div>
          <MdDeleteForever
            onClick={() => deleteItem(todoData.id)}
            className="h-5 w-5 text-red-500"
          />
        </div>
      </div>
      <div className="bg-slate-500 h-0.5 mb-1"></div>
    </div>
  );
};

export default TodoItem;
