import React, { useState } from "react";




const result = document.getElementById('result');  //id result 인곳에 표시함
document.onclick = ClickScreen;

function ClickScreen(evt){

  //event 객체에 접근
  evt = evt || window.event;
  var x = 0,
      y = 0;

  //event 객체가 pageX 속성을 포함하고 있다면 pageX와 pageY 위치
  if(evt.pageX){
    x = evt.pageX;
    y = evt.pageY;

  //event 객체가 clientX 속성을 포함하고 있다면
  }else if(evt.clientX){
    var offsetX = 0,
        offsetY = 0;

    //documentElement.scrollLeft를 지원하면
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

 //document.write("you clicked at x=" + x + " y=" + y);
  result.innerHTML = `${x}px, ${y}px`;
}

const Stardot = () => {
    //Client기준 좌표

  return (
    <div>
      <p>Client X, Y</p>
      <div id="result"></div>
    </div>
  );
};

export default Stardot;
