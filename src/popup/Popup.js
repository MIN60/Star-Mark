import React from 'react';
import {post} from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import './Popup.css';


//모달 팝업창
const styles = theme => ({
    hidden: {
        display:'none'
    }
});




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
        return post(formData);
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

/////




    render(){
        //팝업창 디자인
        //const {classes} = this.props;
        return(
            <div>
                <img src="img/stars.png" onClick={this.handelClickOpen}/>
                    
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <Button className="closebtn" variant="outlined" color="primary" onClick={this.handleClose}>X</Button>  
                    <DialogTitle classNmae="popTitle">ADD STAR MARK</DialogTitle>
                    <DialogContent>
                        <TextField label ="NAME" type="text" name="Name" value={this.state.Name} onChange={this.handleValueChange}/><br/>
                        <TextField label ="URL" type="text" name="URL" value={this.state.URL} onChange={this.handleValueChange}/><br/>
                             
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="primary" onClick={this.handleDelete}>DELETE</Button>
                        <Button variant="contained" color="primary" onClick={this.handleAdd}>ADD</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(Popup);