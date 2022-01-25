import gsap from 'gsap'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './bookmark.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';


//모달 팝업창
const styles = theme => ({
    hidden: {
        display:'none'
    }
});


const Bookmark = () => {
    const { id } = useParams();
    const [open,setOpen] = useState(false);
    const [bookmarkname,setBookmarkName] = useState('');
    const [link,setLink] = useState('');

    //handle bookmarkname change
    const handleBookmarkNameChange = e => setBookmarkName(e.target.value);
    //handle link change
    const handleLinkChange = e => setLink(e.target.value);

    //dialog 모달창
    const handelClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => { //창끄기
        setOpen(false);
        setBookmarkName('');
        setLink('');
    }

    // ADD버튼 누르면 저장할 예정
    const handleAdd = () =>{
        axios.post("/api/bookmarks/3", {
            'email': id,
            'bookmarkname': bookmarkname,
            'link': link,
            'attr': 'like',
            'memo': 'i like this page',
            'x_coor': 234,
            'y_coor': 234
        }).then(function(response) {
            console.log(response);
            alert('Bookmark Added!');
            handleClose();
        }).catch(function(error) {
            console.log(error.response);
        });
    }

    const handleDelete = () => { 
        //bookmark 삭제
        axios.delete('/api/bookmarks/4',{
            'email': id,
            'link': link
        }).then(function(response) {
            console.log(response);
            alert('Bookmark deleted!');
            handleClose();
        }).catch(function(error) {
            console.log(error.response);
        });
    }

    return(
        <div>
            <h1>{id}'s Bookmark Sky</h1>
            <Button variant="contained" color="primary" onClick={handelClickOpen}>
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <Button className="closebtn" variant="outlined" color="primary" onClick={handleClose}>X</Button>  
                <DialogTitle classNmae="popTitle">ADD STAR MARK</DialogTitle>
                <DialogContent>
                    <TextField label ="NAME" type="text" name="Name" value={bookmarkname} onChange={handleBookmarkNameChange}/><br/>
                    <TextField label ="URL" type="text" name="URL" value={link} onChange={handleLinkChange}/><br/>
                            
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="primary" onClick={handleDelete}>DELETE</Button>
                    <Button variant="contained" color="primary" onClick={handleAdd}>ADD</Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}

export default withStyles(styles)(Bookmark);