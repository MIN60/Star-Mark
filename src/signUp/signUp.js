import React from 'react';
import './signUp.css';
import axios from 'axios';
import { Link, Navigate, Redirect, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

axios.defaults.withCredentials = true;

function ChangeLogin(){
    window.location.href="/Login";
}

const SignUp = () => {

    const submitUserInfo = () => {
        const username = document.getElementsByName('username')[0].value.trim();
        const nickName = document.getElementsByName('nickName')[0].value.trim();
        const email = document.getElementsByName('email')[0].value.trim();
        const pw1 = document.getElementsByName('pw1')[0].value.trim();
        const pw2 = document.getElementsByName('pw2')[0].value.trim();

        if(username === ""){
            return alert('아이디를 입력해주세요.');
        }
        else if(nickName === ""){
            return alert('닉네임을 입력해주세요.');
        }
        else if(email === ""){
            return alert('이메일을 입력해주세요.');
        }
        else if(pw1 === ""){
            return alert('비밀번호를 입력해주세요.');
        }
        else if(pw2 === ""){
            return alert('비밀번호 확인을 위해 비밀번호를 한 번 더 입력해주세요.');
        }
        

        if(pw1 === pw2){
        }
        else{
            return alert('비밀번호가 일치하지 않습니다.');
        }

        axios.post("http://192.249.18.163:80/controllers/user/",{
            name: username,
            email: email,
            password: pw2,
            nickname: nickName,
        })
        .then(function(response) {
            console.log(response);
            alert('회원가입이 완료되었습니다!');
            window.location.href = "/";
            
        })
        .catch(function(error) {
            console.log(error.response);
        });

        
    }

    return(
        <div className='signUpPage'>
            <div className='SignUpPage2'>
            <h2 className='signUpTitle'>SIGN UP</h2>
            <div>
                <FormControlLabel
                className="signupbtn"
                value="start"
                control={<Switch color="primary" defaultChecked  onChange={ChangeLogin}/>}
                label="SignUp"
                labelPlacement="start"
                />
            </div>
            <div className='newInfo'>
                <table className='signUp-form'>
                    <tbody>
                    <tr>
                            <td className='signupTableItem'>
                                <p className='hometext'>NAME</p>
                                </td>
                            <td className='signupTableItem'>
                                <TextField className="SignupField"  type='text' name='username' id="standard-basic" variant="standard" />
            
                            </td>
                        </tr>
                        <tr>
                            <td className='signupTableItem'>NICKNAME</td>
                            <td className='signupTableItem'>
                                <TextField  type='text' name='nickname' id="standard-basic" variant="standard" />
            
                            </td>
                        </tr>
                        <tr>
                            <td className='signupTableItem'>EMAIL</td>
                            <td className='signupTableItem'>
                                <TextField type='text' name='email' id="standard-basic" variant="standard" />
                            </td>
                        </tr>
                        <tr>
                            <td className='signupTableItem'>PW</td>
                            <td className='signupTableItem'>
                                <TextField  type='password' name='pw1' id="standard-basic" variant="standard" />
            
                            </td>
                        </tr>
                        <tr>
                            <td className='signupTableItem'>CONFIRM</td>
                            <td className='signupTableItem'>
                                <TextField  type='password' name='pw2' id="standard-basic" variant="standard" />
            
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <Button color="secondary" className='submitBtn' variant="contained" onClick={submitUserInfo}>DONE</Button>
            </div>
            </div>
        </div>
    )
}

export default SignUp;