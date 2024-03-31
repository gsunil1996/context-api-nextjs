"use client";

import React, { useState } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import { addTodo, editTodo, removeTodo } from "@/context/actions/todoActions";
import { EditTodoProps } from "@/types/todo.types";

const TodoComponent = () => {
  const { todoState, todoDispatch } = useGlobalContext()

  const [text, setText] = useState<string>("");
  const [editText, setEditText] = useState<EditTodoProps | null>(null);

  const handleAddTodo = (): void => {
    todoDispatch(addTodo(text));
    setText("");
  };

  const handleEdiClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, item: EditTodoProps): void => {
    setEditText(item);
  };

  const handleEditTodo = (): void => {
    if (editText) {
      const payload = {
        id: editText.id,
        name: editText.name
      };
      todoDispatch(editTodo(payload));
      setEditText(null)
    }
  };


  const handleRemoveTodo = (id: number): void => {
    todoDispatch(removeTodo(id));
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>

        <br />
        <br />

        {todoState?.todos?.map((item: EditTodoProps, index: number): React.JSX.Element => (
          <ul key={index}>
            <li>
              {item.id} - {item.name}

              {editText?.id == item.id ? (

                <div>
                  <input
                    type="text"
                    value={editText?.name}
                    onChange={(e) => setEditText({ ...editText, name: e.target.value })}
                  />
                  <button onClick={handleEditTodo}>Edit Todo</button>
                </div>
              ) : (
                <button onClick={(e) => handleEdiClick(e, item)}>Edit</button>
              )}
              <button onClick={() => handleRemoveTodo(Number(item.id))}>Remove</button>
            </li>
          </ul>
        ))}

      </div>
    </div>
  );
};

export default TodoComponent;
