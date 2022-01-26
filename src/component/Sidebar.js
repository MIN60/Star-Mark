import React from "react";
import "./sidebar.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Cookies } from "react-cookie";
import star1 from './star1.png';

////////
const Sidebar = () => {
    
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const { id } = useParams();
  let gotnickname = '';

  const cookies = new Cookies();

  axios.get("/api/users/finduser", {
    params: { email: id },
    headers: {
      "Authorization": cookies.get("Authorization"),
    },
  }).then(function (response) {
    console.log(response);
    gotnickname = response.data.nickname;
    console.log(gotnickname);
    }).catch(function (error) {
    return alert("Error: Can't find nickname");
  });

  return (
    <aside className="sidebarstyle">
      <div className="userintroduction">{`${gotnickname}'s\nBookmark Sky`}</div>
      <div className="description" className="dndtitle">Select StarMark</div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <img alt="star1" className="imgsize" src={star1}/>
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <img alt="star1" className="imgsize" src={star1}/>
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <img alt="star1" className="imgsize" src={star1}/>
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <img alt="star1" className="imgsize" src={star1}/>
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <img alt="star1" className="imgsize" src={star1} />
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <img alt="star1" className="imgsize" src={star1}/>
      </div>
    </aside>
  );
};

export default Sidebar;