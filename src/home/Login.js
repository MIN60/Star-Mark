import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';



axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const label = { inputProps: { 'aria-label': 'Switch demo' } }


function ChangeSignup(){
    window.location.href="/SignUp";
}

const Home = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  const login = () => {
    const email = document.getElementsByName('email')[0].value.trim();
    const pw = document.getElementsByName('pw')[0].value.trim();

    if (email === "") {
      return alert("이메일을 입력해주세요.");
    } else if (pw === "") {
      return alert("비밀번호를 입력해주세요.");
    }

    axios
      .get("/users/signin", {params: {
        email: email, 
        password: pw,
      }})
      .then(function (response) {
        console.log(response);

        if (response.data == "wrong userID") {
          return alert("등록되지 않은 이메일입니다.");
        } else if (response.data == "wrong password") {
          return alert("잘못된 비밀번호입니다.");
        } else {
          sessionStorage.setItem("user_id", email);
          window.location.href = "/Seats";
        }
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  return (
    <div className="homepage2">
      <div className="login">
        <p className="homeText">Welcome Back! </p>
        
        <div>
            <FormControlLabel
            className="signupbtn"
            value="start"
            control={<Switch color="primary" onChange={ChangeSignup}/>}
            label="SignUp"
            labelPlacement="start"
            />

        </div>
        <table className="loginTable">
          <tbody>
            <tr>
              <td className="tableItem">
                <p className="homeText">EMAIL:</p>
              </td>
              <td className="tableItem">
                <TextField
                  className="loginField"
                  type="text"
                  name="email"
                  id="standard-basic"
                  variant="standard"
                />
              </td>
            </tr>
            <tr>
              <td className="tableItem">
                <p className="homeText">PW:</p>
              </td>

              <td className="tableItem">
                <TextField
                  type="password"
                  name="pw"
                  id="standard-basic"
                  variant="standard"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div>
            <Button color="secondary" className='loginBtn' variant="contained" onClick={login}> LOGIN </Button>
        </div>
      </div>

      <div
        className="cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      />
    </div>
  );
};

export default Home;