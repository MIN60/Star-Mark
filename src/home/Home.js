import React, {useState,useRef} from 'react';
import { Link } from "react-router-dom";
import './home.css';
import Login from './Login.js';
import axios from 'axios';


axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';



const Home = () => {

    const seatArea1 = useRef(null);

    const scrollTo = (ref) => {
        window.scroll({
            top: ref.current.offsetTop,
            behavior: "smooth",
        });
    }
    return (
        <div>
        <div className='homepage' onClick={() => scrollTo(seatArea1)}>
            <div className='logoImg'>
                <h1 className="titlefont">STAR MARK</h1>
            </div>
        </div>
        <div className='LoginPage' ref={seatArea1}>
        <Login />
        </div>
        </div>
    )
}

export default Home;