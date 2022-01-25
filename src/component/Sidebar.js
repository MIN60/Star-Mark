import React from "react";
import "./sidebar.css";
//import popup from "../popup/Popup.js";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Popup extends React.Component{
  constructor(props){
      super(props);
      //모든 변수 초기화
      this.state={
          Name:'',
          URL:'',
          open:false
      }
  }

  // ADD버튼 누르면 저장할 예정
  handleAdd = (e) =>{
      e.preventDefault()
      this.addMark()
          .then ((response) => {
              console.log(response.data);
              this.props.stateRefresh();
          })
      this.setState({
          file:null,
          Name:'',
          URL:'',
          open:false
      })
  }

  handleValueChange=(e)=>{
      let nextState ={};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
  }

  
  addmark =() =>{  // DB에 정보를 보낼 예정
      const formData = new FormData();
      formData.append('Name', this.state.Name);
      formData.append('URL', this.state.URL);
      //return post(formData);
  }

  //dialog 모달창
  handelClickOpen = () => {
      this.setState({
          open : true
      });
  }

  handleDelete = () => { //미구현 항목. 삭제
      this.setState({
          //axios 삭제
      })
  }
  handleClose = () => { //창끄기
      this.setState({
          Name:'',
          URL:'',
          open:false
      })
  }
};



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