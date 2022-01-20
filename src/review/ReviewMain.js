import React, {Component, useState, useEffect} from 'react';
import './reviewMain.css';
//import SingleComment from './SingleComment';
import { Header } from '../header/index.js';
import { useParams } from 'react-router-dom';
import axios from "axios";
import  Grid  from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import {Container} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles({
    cardBack: {
        backgroundColor: '#6667AB',
    }, 
});

const ReviewMain = () => {

    const classes = useStyles();

    const reviewId = useParams();
    //console.log(reviewId);

    //const [comments, setComments] = useState([]);
    const [content, setContent] = useState([]);
    const [theaterInfo, setTheaterInfo] = useState([]);

    useEffect(() => {
        axios.get("http://192.249.18.169:443/theaters/")
            .then((response) => {

                setTheaterInfo([...response.data]);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
        });
    }, [ ])

    useEffect(() => {
        axios.get("http://192.249.18.169:443/reviews/list/")
            .then((response) => {

                setContent([...response.data]);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
        });
    }, [ ])

    


    /*useEffect(() => {
        setComments([
            {
                uuid: 1,
                writer: "홍길동",
                date: "2022-01-13",
                content: "첫 번째 댓글"
            },
            {
                uuid: 2,
                writer: "크로플",
                date: "2022-01-14",
                content: "크로플 먹고 싶어요"
            },
        ])
    }, [ ])

    const addComment = () => {
        let value = document.querySelector('#newComment').value;
        setComments([...comments, {
            uuid: comments.length + 1,
            writer: '사용자 닉네임',
            date: new Date().toISOString().slice(0,10),
            content: value
        }]);
    }*/

    return (
        <div className='ReviewMain'>
            <Header />
            <br/>
            <div className='wrapTitle'>
                <div className='ReviewTitle'>
                    {
                        content.map(item => {
                            if(item.id == reviewId.reviewNo)
                            {
                                return(
                                    <div>
                                        <h1 className='reviewTitleText'>{ item.title }</h1>
                                        <br/>
                                        <p className='rtext'> 작성자: { item.user_id } / 작성일: {item.created_at.toString().slice(0,10)}</p>
                                    </div>
                                );
                            }
                        })
                        
                    }
                    
                </div>

                <div className='theaterInfo'>
                    {
                        content.map(item => {
                            if(item.id == reviewId.reviewNo)
                            {
                                return(
                                    <Card elevation={5} className={classes.cardBack}>
                                        <CardContent>
                                            {
                                                theaterInfo.map(th => {
                                                    if(th.id == item.theater){
                                                        return(
                                                            <Typography class="bodycolor" variant="body2">
                                                                {th.name}
                                                            </Typography>
                                                        )
                                                    }
                                                })
                                            }
                                            <Typography class="bodycolor" variant="body2">
                                                {item.seatX}행 {item.seatY}열
                                            </Typography>
                                            
                                        </CardContent>
                                    </Card>
                                );
                            }
                        })
                    }
                </div>
                
            </div>
            <br/>
            <div className='ReviewParagraph'>
                    {
                        content.map(item => {
                            if(item.id == reviewId.reviewNo)
                            {
                                return(
                                    <div>
                                        <p className='btext'>{item.content}</p>
                                    </div>
                                );
                            }
                        })
                    }
                
            </div>
            <br/>
            {/*<div className='ReviewComments'>
                <h3 className='ReviewCommentsTitle'>Comments</h3>
                <div>
                    <div className='writeComment'>
                        <div className='nicknameComment'>닉네임</div>
                        <textarea id='newComment'></textarea>
                        <button id='addComment' onClick={addComment}>댓글 등록</button>
                    </div>
                    <ul id='commentList'>
                        {
                            comments.map(comment => {
                                return <SingleComment key={comment.uuid} comment={comment}/>
                            })
                        }

                    </ul>
                </div>
                    </div>*/}
        </div>
    );
};

export default ReviewMain;
