import React, {Component, useState, useEffect} from 'react';
import './profile.css'
import SingleReview from './SingleReview';
import { Header } from '../header/index.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import "../css/style.css";


const Profile = (props) => {

    const nickName = useParams();
    console.log(nickName);

    const [ myReviewList, setMyReviewList ] = useState([]);

   
    useEffect(() => {
        /*setMyReviewList([{
                uuid: 1,
                reviewTitle: "용아맥 제일 앞줄"
            },
            {
                uuid: 2,
                reviewTitle: "뒷 줄 별로야"
            },
        ]);*/
        axios.get("http://192.249.18.169:443/reviews/list/")
        .then((response) => {
            setMyReviewList([...response.data]);
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [ ])


    console.log(myReviewList);

    const user = sessionStorage.getItem("user_id");
    console.log(user);

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios.get("http://192.249.18.169:443/account/getUsers/")
        .then((response) => {
            setUserInfo([...response.data]);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [ ])



    

    return (
        <div>
            <Header />
            <div className='background'>
            
            <h2 className='profileTitle'>My Page</h2>
            <div className='myInfo'>
            <Paper  className="paperst" elevation={2}>
                <table className='myInfo-form'>
                    <tbody>
                        <tr>
                            <td className='profileTableItem1'>아이디</td>
                            <td className='profileTableItem1'>{user}</td>
                        </tr>
                        <tr>
                            <td className='profileTableItem2'>닉네임</td>
                            {
                                userInfo.map(item => {
                                    if(item.userID == user){
                                        return(<td className='profileTableItem2'>{item.nickname}</td>)
                                    }
                                })
                            }
                        </tr>
                    </tbody>
                </table>
            </Paper>
                
            </div>

            <div className='myReview'>
                <h3 className='profileTitle'>MY REVIEW</h3>
                <div>
                    <ul id='myReviewList'>
                        {
                            myReviewList.map(review => {
                                if(review.user_id == user){
                                    return (
                                        <div className='review'>
                                            <Paper  className="rst" elevation={2}>
                                            {review.title}
                                            </Paper>
                                        </div>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
            <span></span>
                <span></span>
                <span></span>
                <span></span>
        </div>
       
        </div>
    );

}

export default Profile;