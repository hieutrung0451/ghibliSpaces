import React, { useContext } from "react";
import "./Todo.css";
import Content from "./Content";
import ColorContext from "../../contexts/ColorContext";

const Todo = () => {
  const color = useContext(ColorContext);

  return (
    <div className="app_todo" style={{ backgroundColor: color.color }}>
      <div className="todoList-site__header">
        <select className="listSelect" style={{ backgroundColor: color.color }}>
          <option value="all">My Tasks</option>
        </select>
        <a href="#">
          <i className="fa fa-minus"></i>
        </a>
      </div>
      <Content />
    </div>
  );
};

export default Todo;