import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './home.css';
import axios from 'axios';
import TextField from '@mui/material/TextField';


axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Home = () => {

    const[cursorX, setCursorX] = useState();
    const[cursorY, setCursorY] = useState();
  
    window.addEventListener('mousemove', (e) => {
      setCursorX(e.pageX)
      setCursorY(e.pageY)
    })

    const login = () => {
        const userId = document.getElementsByName('id')[0].value.trim();
        const pw = document.getElementsByName('password')[0].value.trim();

        if(userId === ""){
            return alert('아이디를 입력해주세요.');
        }
        else if(pw === ""){
            return alert('비밀번호를 입력해주세요.');
        }

        axios.post("http://192.249.18.169:443/account/login/",{
            userID: userId,
            password: pw,
        })
        .then(function(response) {
            console.log(response);

            if(response.data == 'wrong userID'){
                return alert("등록되지 않은 아이디입니다.");
            }
            else if(response.data == 'wrong password'){
                return alert("잘못된 비밀번호입니다.");
            }
            else{
                sessionStorage.setItem('user_id', userId);
                window.location.href = "/Seats";
            }
        })
        .catch(function(error) {
            console.log(error.response);
        });
    }



    return (
        <div className='homepage'>
            <div className='login'>
                <table className='loginTable'>
                    <tbody>
                        <tr>
                            <td className='tableItem'><p className='homeText'>ID:</p></td>
                            <td className='tableItem'>
                                <TextField type="text" name='id'id="standard-basic"  variant="standard" />
                            </td>
                        </tr>
                        <tr>
                            <td className='tableItem'><p className='homeText'>PW:</p></td>
                
                            <td className='tableItem'>
                                <TextField type="password" name='password' id="standard-basic" variant="standard" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                   
                <p className='loginBtn' onClick={login}>LOGIN</p>

                <Link to='/SignUp'>
                    <p className='signupBtn'>SIGN UP</p>
                </Link>

            
            </div>

            <div className='cursor' style={{
                    left: cursorX + 'px',
                    top: cursorY + 'px'
            }}/>

        </div>
    )
}

export default Home;