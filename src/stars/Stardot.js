import React, { memo, useState } from "react";
import './Stardot.css';
import TextField from '@mui/material/TextField';
import axios from "axios";


axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

document.onclick = ScreenClick;

var x = 0, y = 0;


function ScreenClick(evt){

    /*
    const email = document.getElementsByName('email')[0].value.trim();
    const link = document.getElementsByName('link')[0].value.trim();
    const attr = document.getElementsByName('attr')[0].value.trim();
    const memo = document.getElementsByName('memo')[0].value.trim();
    */

    const email = 'hi22';
    const link = 'hi111';
    const attr = 'hi222222';
    const memo = 'hi333333';
 
  


  //event 객체에 접근
  evt = evt || window.event;

  //event 객체가 pageX 속성을 포함하고 있다면 pageX와 pageY 위치
  if(evt.pageX){
    x = evt.pageX;
    y = evt.pageY;

  //clientX 속성
  }else if(evt.clientX){
    var offsetX = 0,
        offsetY = 0;

    //documentElement.scrollLeft를 지원시
    if(document.documentElement.scrollLeft){
      offsetX = document.documentElement.scrollLeft;
      offsetY = document.documentElement.scrollTop;
    }else if(document.body){
      offsetX = document.body.scrollLeft;
      offsetY = document.body.scrollTop;
    }

    x = evt.clientX + offsetX;
    y = evt.clientY + offsetY;
    
    
  }
  console.log(x,y) //콘솔에 좌표 찍기

 
  //DB저장
  axios.post("/bookmarks/3",{
    'email': email,
    'link': link,
    'attr': attr,
    'memo': memo,
    'x_coor': x,
    'y_coor': y,
})
.catch(function(error) {
    console.log(error.response);
});


  //document.write("좌표 x=" + x + " y=" + y); //페이지 넘겨서 출력

}

const Stardot = () => {
 //Client기준 좌표

  return (
    <div>
        <div className="Starback">
        <p>Client X, Y</p>
    
      </div>
    </div>
  );
};

export default Stardot;
