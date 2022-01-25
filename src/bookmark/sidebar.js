import React from "react";
import "./sidebar.css";
import Popup from "./popup.js";

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
        <div className="description">
            <Popup />
        </div>
        <div
            className="dndnode input"
            onDragStart={(event) => onDragStart(event, "input")}
            draggable
        >
            Red
        </div>

        <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "default")}
            draggable
        >
            Orange
        </div>

        <div
            className="dndnode output"
            onDragStart={(event) => onDragStart(event, "output")}
            draggable
        >
            Yellow
        </div>

        <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "default")}
            draggable
        >
            Orange
        </div>

        <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "default")}
            draggable
        >
            Yellow
        </div>

        <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "default")}
            draggable
        >
            Green
        </div>

        <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "default")}
            draggable
        >
            Blue
        </div>

        <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "default")}
            draggable
        >
            Purple
        </div>
    </aside>
  );
};

export default Sidebar;