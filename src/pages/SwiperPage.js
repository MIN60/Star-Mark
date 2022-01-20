import React, {useRef} from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../css/swiper.css";
import YSeatPage from './YSeatPage.js';
import WSeatPage from './WSeatPage.js';
import CSeatPage from './CSeatPage.js';
//import { Link } from 'react-router-dom' //링크로 연결할 떄 사용 예정

import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "../css/style.css";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));


SwiperCore.use([EffectCoverflow, Pagination]);

function SwiperPage() { 
    const classes = useStyles();

    const seatArea1 = useRef(null);
    const seatArea2 = useRef(null);
    const seatArea3 = useRef(null);

    const scrollTo = (ref) => {
        window.scroll({
            top: ref.current.offsetTop,
            behavior: "smooth",
        });
    }
  
    var element = document.getElementById('seatPage');
    console.log(element);

    return (
        
    <div className="view">
        
    <div>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        }}
        pagination={true}  //아래에 현재 슬라이드 이미지 위치 표시하는 인디케이터
        paginationClickable={true} //인디케이터 클릭
        className="mySwiper"
        >
        <SwiperSlide>
            <Paper elevation={5} className={classes.paper} id='Yticket' onClick={() => scrollTo(seatArea1)}> 
                <Typography variant="bodyImage">
                    <img src="img/YImage.jpg" alt="" />
                </Typography>
                <Typography className="bodyfirst" variant="h5" color="#FFFFFF" gutterBottom>
                    CGV용산아이파크몰<br/>IMAX
                </Typography>
                <Typography  variant="body1">
                    주소: 서울특별시 용산구 한강로 3가<br/> 40-999 아이파크몰 6층
                </Typography>
                <Typography variant="body1">
                    전화번호: 1544-1122 
                </Typography>
                <Typography variant="body1">
                세계에서 가장 큰 복합 상영관용 아이맥스
                스크린 상영관이자 대한민국에서 유일하게 아이맥스로 촬영된 비율인 <br/>1.43:1의 스크린 상영관
                </Typography>
            </Paper>
        </SwiperSlide>
        <SwiperSlide>
        <Paper elevation={5} className={classes.paper} id='Cticket' onClick={() => scrollTo(seatArea2)}> 
                <Typography variant="bodyImage">
                    <img src="img/CImage.jpg" alt="" />
                </Typography>
                <Typography className="bodyfirst" variant="h5" color="#FFFFFF" gutterBottom>
                    CGV 천호<br/>IMAX
                </Typography>
                <Typography variant="body1">
                    주소: 서울시 강동구 천호동42<br/> 홈플러스 4층
                </Typography>
                <Typography variant="body1">
                    전화번호: 02-1544-1122
                </Typography>
                <Typography variant="body1">
                24.7m x 18.7m 크기의 IMAX 상영관 (347석)
                </Typography>
            </Paper>
        </SwiperSlide>
        <SwiperSlide>
        <Paper elevation={5} className={classes.paper} id='Wticket' onClick={() => scrollTo(seatArea3)}> 
                <Typography variant="bodyImage">
                    <img src="img/WImage.jpg" alt="" />
                </Typography>
                <Typography className="bodyfirst" variant="h5" color="#FFFFFF" gutterBottom>
                    CGV 왕십리<br/>IMAX
                </Typography>
                <Typography variant="body1">
                    주소: 서울특별시 성동구 행당동 <br/>168-1 왕십리 민자역사 5층
                </Typography>
                <Typography variant="body1">
                    전화번호: 1544-1122
                </Typography>
                <Typography variant="body1">
                    교통이 편리한 총 303석의 IMAX<br/> 상영관
                </Typography>
            </Paper>
        </SwiperSlide>
        </Swiper>
        
       
        <div className='seatPage' ref={seatArea1}>
            <YSeatPage />
        </div>

        <div id='seatPage' ref={seatArea2}>
            <CSeatPage />
        </div>

        <div id='seatPage' ref={seatArea3}>
            <WSeatPage />
        </div>

    </div>
    </div>
    );
};

export default SwiperPage;
