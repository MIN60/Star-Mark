import React, { useState, useRef, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
} from "react-flow-renderer";
import Sidebar from "./Sidebar.js";
import "./dnd.css";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';

import { createTheme, ThemeProvider } from '@mui/material/styles';

//모달 팝업창
const styles = theme => ({
  hidden: {
      display:'none'
  }
});
/*
const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "" },
    position: { x: 250, y: 5 },
  },
];
*/

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

let id = 0;
const setId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState([]);
  //dialog 관련
  const { id } = useParams();
  const [open,setOpen] = useState(false);
  const [bookmarkname,setBookmarkName] = useState('');
  const [link,setLink] = useState('');
  const [memo,setMemo] = useState('');
  const [xpos,setXpos] = useState(0);
  const [ypos,setYpos] = useState(0);

  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);

  useEffect(()=>{
    if (reactFlowInstance) {
    axios.get("/api/bookmarks/1",
      {
        params: {
          email: id
        }
      }).then(function(response) {
        response.data.bookmarks.forEach(function(item){
          const position = reactFlowInstance.project({
            x: item.x_coor,
            y: item.y_coor
          });
          const newNode = {
            id: setId(),
            type: 'default',
            position,
            data: { bmname: item.bookmarkname, url: item.link, memo: item.memo },
          };
          setElements((es) => es.concat(newNode));
        });
      }).catch(function(error) {
          console.log(error);
      });
  }},[reactFlowInstance])

  console.log(elements);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    setXpos(event.clientX - reactFlowBounds.left);
    setYpos(event.clientY - reactFlowBounds.top);
    const newNode = {
      id: setId(),
      type,
      position,
      data: { url : "" },
    };

    setElements((es) => es.concat(newNode));
  };

  //handle bookmarkname change
  const handleBookmarkNameChange = e => setBookmarkName(e.target.value);
  //handle link change
  const handleLinkChange = e => setLink(e.target.value);
  //handle memo change
  const handleMemoChange = e => setMemo(e.target.value);

  //dialog 모달창
  const handelClickOpen = () => {
      setOpen(true);
  }

  const handleClose = () => { //창끄기
      setOpen(false);
      setBookmarkName('');
      setLink('');
      setMemo('');
  }

  const cookies = new Cookies();

  // ADD버튼 누르면 저장할 예정
  const handleAdd = () =>{
    console.log("enter add handler");
      axios.post("/api/bookmarks/3",
      {
        headers: {
          "Authorization": cookies.get("Authorization"),
        },
        'email': id,
        'bookmarkname': bookmarkname,
        'link': link,
        'memo': memo,
        'x_coor': xpos,
        'y_coor': ypos
      }).then(function(response) {
          console.log(response);
          alert('Bookmark Added!');
          handleClose();
      }).catch(function(error) {
          console.log(error.response);
      });

      //handleClose();
  }

  const handleDelete = () => { 
      //bookmark 삭제
      axios.delete('/api/bookmarks/4',{
        headers: {
          "Authorization": cookies.get("Authorization"),
        },
          'email': id,
          'link': link,
      }).then(function(response) {
          console.log(response);
          alert('Bookmark deleted!');
          handleClose();
      }).catch(function(error) {
          console.log(error.response);
      });
      handleClose();
  }

  const handleLink = () => {
    window.open(link, '_blank');  //새 창으로 연결

  }
  
  const graphStyles = { background:"public/img/stars.png"};

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeDoubleClick={handelClickOpen}
            style={graphStyles}
          >
          <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
      {open ? 
            <Dialog className="dialog" open={open} onClose={handleClose}>
              <Button className="closebtn" variant="outlined" color="primary" onClick={handleClose}>X</Button>  
              <DialogTitle className="popTitle">ADD STAR MARK</DialogTitle>
              <DialogContent>
                <TextField label ="NAME" type="text" name="Name" value={bookmarkname} onChange={handleBookmarkNameChange}/><br/>
                <TextField label ="URL" type="text" name="URL" value={link} onChange={handleLinkChange}/><br/>
                <TextField label ="MEMO" type="text" name="Memo" value={memo} onChange={handleMemoChange}/><br/>
              </DialogContent>
              <DialogActions>
                <ThemeProvider theme={theme}>
                <Button variant="outlined" color="primary" onClick={handleDelete}>DELETE</Button>
                <Button variant="outlined" color="secondary" onClick={handleLink}>LINK</Button>
                <Button variant="contained" color="primary" onClick={handleAdd}>ADD</Button>
                </ThemeProvider>
              </DialogActions>
            </Dialog> 
          : null}
    </div>
  );
};

export default withStyles(styles)(DnDFlow);
