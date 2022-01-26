import React from "react";
import "./sidebar.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';


////////
const Sidebar = () => {
    
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const { id } = useParams();
  let gotnickname = '';
/*
  axios.get("/api/users/finduser", {params: {
    email: id
    }}).then(function (response) {
    console.log(response);
    gotnickname = response.data.nickname;
    console.log(gotnickname);
    }).catch(function (error) {
    return alert("Error: Can't find nickname");
  });
  */

  return (
    <aside className="sidebarstyle">
      <div className="userintroduction">{`${gotnickname}'s\nBookmark Sky`}</div>
      <div className="description" className="dndtitle">Select StarMark</div>
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
        <img alt="star1" className="imgsize" src="img/stars.png" />
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