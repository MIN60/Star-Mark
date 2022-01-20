import React from "react";
import SwiperPage from './SwiperPage.js';
import { Header } from '../header/index.js';
import '../css/swiper.css';

const Seats = () => {
    
    var element = document.getElementById('seatPage');
    console.log(element);

    return(
        <div>
            <Header />
            <SwiperPage />
        </div>
    );
}

export default Seats;