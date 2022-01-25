import React from "react";
import "./sidebar.css";
//import popup from "../popup/Popup.js";


////////
const Sidebar = () => {
    
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="sidebarstyle">
      <div className="description" className="dndtitle">Select StarMark</div>

      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <img alt="star1" className="imgsize" src="img/stars.png"/>
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <img alt="star1" className="imgsize" src="img/stars.png"/>
      </div>

      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <img alt="star1" className="imgsize" src="img/stars.png"/>
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <img alt="star1" className="imgsize" src="img/stars.png"/>
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <img alt="star1" className="imgsize" src="img/stars.png"/>
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <img alt="star1" className="imgsize" src="img/stars.png"/>
      </div>
    </aside>
  );
};

export default Sidebar;