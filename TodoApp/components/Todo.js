import React, { useState } from "react";
import "./todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch("");
  const list = useSelector((state) => state.todoReducer.list);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>
              Add Your List Here<span> ✌</span>
            </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <FontAwesomeIcon
              className="icon-plus"
              icon={faPlus}
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            />
          </div>
          <div className="showItems">
            {list.map((elem) => {
              return (
                <>
                  <div className="eachItem" key={elem.id}>
                    <h3>{elem.data}</h3>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="icon-trash"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div>
            <button className="removeAll" onClick={() => dispatch(removeTodo())}>
                Remove All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
